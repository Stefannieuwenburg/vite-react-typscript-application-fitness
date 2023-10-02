export enum SelectedPage {
    Home = "Home",
    Benefits = "Benefits",
    OurClasses = "Ourclasses",
    ContactUs = "Contact",
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
  image: string;
}
