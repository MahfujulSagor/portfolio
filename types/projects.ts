import { StaticImageData } from "next/image";

export interface Projects {
  name: string;
  description: string;
  image: StaticImageData;
  icons: ProjectIcons[];
}

interface ProjectIcons {
  icon: StaticImageData;
  height: number;
}
