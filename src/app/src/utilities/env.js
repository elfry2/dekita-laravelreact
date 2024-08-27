export default function env(key) {
  return import.meta.env.`VITE_${key}`;
}
