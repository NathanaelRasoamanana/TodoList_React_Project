export function randomDateGenerator(
  min: number = 1,
  max: number = 10
): string[] {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;

  const dates: string[] = [];
  const now = Date.now();

  for (let i = 0; i < count; i++) {
    const randomDays = Math.floor(Math.random() * 365) + 1;
    const future = new Date(now + randomDays * 24 * 60 * 60 * 1000);

    dates.push(future.toISOString().slice(0, 16));
  }

  return dates;
}