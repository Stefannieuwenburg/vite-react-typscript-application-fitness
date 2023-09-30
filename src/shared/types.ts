export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}

export type Props = {
  page: string;
  isMenuToggled: boolean;
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export interface BenefitType{
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface OurClassesType{
  name: string;
  description: string;
  image: string;
}
