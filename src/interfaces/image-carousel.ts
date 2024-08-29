export interface ImageCarousel {
  imgBackground: string;
  firstTextBold?: boolean;
  firstText?: string;
  secondText?: string;
  secondTextBold?: boolean;
  positionText: "left" | "right" | "center";
  alignText?: "start" | "end" | "center";
}
