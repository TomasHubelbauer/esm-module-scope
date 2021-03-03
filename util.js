export default function util(message) {
  const caller = new URL(import.meta.url).search.slice('?'.length);
  console.log(caller, message);
}
