const Footer = () => {
  const date = new Date();

  return (
    <footer className="py-10 px-5 bg-secondary">
      <div className="flex flex-col gap-4 justify-between items-center text-white container mx-auto | md:flex-row">
        <h2 className="font-bold text-xl">Kagiso Mokou</h2>

        <p>&copy;{date.getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
