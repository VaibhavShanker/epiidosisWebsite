import HeroSectionUi from "../../ui/HeroSectionUI";
import heroloanagainst from '/img/loanagainstlistedstocks/heroloanagainst.png'
const beradcrumbs = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "OUR SERVICES",
      link: "#",
    },
    {
      title: "LOAN AGAINST LISTED STOCKS",
      link: "/loanagainststocks",
    }
  ];

  
const heroTextData = {
    title:"Unlock Liquidity with Your Listed Stocks",
    desc:"Unlock the potential of your investments with Epiidosis Investments LLC. Secure quick and flexible loans using your listed stocks as collateral. Start now and leverage your assets without selling them.",
    buttonText:"Get Started"
}
const HeroLoanAgainstStock = () => {
  return (
    <div>
       <HeroSectionUi beradcrumbs={beradcrumbs} heroTextData={heroTextData} heroasset={heroloanagainst} />
    </div>
  )
}

export default HeroLoanAgainstStock
