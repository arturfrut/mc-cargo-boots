// Compresión de fotos en el navegador antes de enviarlas por email (ver
// docs/decisions/0006-formularios-envio-email-resend.md). Las fotos de pies
// salen del celular del cliente (3000-4000px, varios MB) — comprimirlas acá
// evita pegar contra los límites de tamaño de la función serverless de
// Vercel y del adjunto de Resend cuando se suben hasta 10 fotos juntas.

const MAX_DIMENSION_PX = 1280;
const JPEG_QUALITY = 0.72;

/**
 * Redimensiona (lado más largo a MAX_DIMENSION_PX) y recodifica a JPEG. Si el
 * archivo no es una imagen, o si comprimir falla por lo que sea, devuelve el
 * archivo original sin tocar — mejor mandar la foto pesada que no mandar nada.
 */
export async function comprimirImagen(file: File): Promise<File> {
  if (!file.type.startsWith("image/")) return file;

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_DIMENSION_PX / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();

    const blob: Blob | null = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY),
    );
    if (!blob) return file;

    const newName = file.name.replace(/\.\w+$/, "") + ".jpg";
    return new File([blob], newName, { type: "image/jpeg" });
  } catch {
    return file;
  }
}

export async function comprimirImagenes(files: File[]): Promise<File[]> {
  return Promise.all(files.map(comprimirImagen));
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // "data:image/jpeg;base64,AAAA..." → nos quedamos solo con la parte base64.
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
