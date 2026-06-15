export default function WhatsAppButton() {
  const phone = "33659506076";
  const message = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services de prévoyance.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebe5d] transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.471 2.027 7.774L0 32l8.476-2.001A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.848l-.486-.29-5.028 1.187 1.21-4.897-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.874c-.398-.199-2.354-1.162-2.72-1.295-.366-.133-.632-.199-.898.199-.266.398-1.031 1.295-1.264 1.561-.233.266-.465.299-.863.1-.398-.2-1.681-.62-3.202-1.977-1.184-1.056-1.983-2.36-2.215-2.758-.233-.398-.025-.613.175-.811.18-.179.398-.465.597-.698.199-.233.266-.398.398-.664.133-.266.067-.498-.033-.698-.1-.199-.898-2.164-1.23-2.963-.324-.778-.653-.672-.898-.685l-.765-.013c-.266 0-.698.1-1.064.498-.366.398-1.397 1.365-1.397 3.33 0 1.965 1.43 3.863 1.629 4.13.199.266 2.814 4.296 6.818 6.026.953.411 1.697.657 2.277.841.957.305 1.828.262 2.516.159.767-.114 2.354-.963 2.686-1.893.333-.93.333-1.728.233-1.893-.1-.165-.366-.265-.764-.464z" />
      </svg>
    </a>
  );
}
