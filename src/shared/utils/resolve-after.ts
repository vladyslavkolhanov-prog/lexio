export async function resolveAfter<T>(data: T, ms: number): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms))
}
