export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourClasses",
    ContactUs = "contactUs",
}


export type Props = {
  page: string;
  isMenuToggled: boolean;
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};