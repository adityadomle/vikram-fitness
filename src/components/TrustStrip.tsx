const TrustStrip = () => {
  const message = "GET YOUR DREAM BODY WITH ONLINE COACHING!";
  const repeated = Array(6).fill(message).join("   •   ");

  return (
    <div className="bg-foreground text-primary-foreground overflow-hidden py-3">
      <div className="animate-marquee whitespace-nowrap text-sm font-medium tracking-widest">
        {repeated}
      </div>
    </div>
  );
};

export default TrustStrip;
