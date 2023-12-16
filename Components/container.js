export const container = (images) => {
  if (!images) {
    images = "";
  }
  return ` 
  <main class="container">
  ${images}
    </main>
    `;
};
