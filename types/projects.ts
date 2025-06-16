import { StaticImageData } from "next/image";

export interface Projects {
  name: string;
  description: string;
  type: string;
  github: string;
  image: StaticImageData;
  icons: ProjectIcons[];
}

interface ProjectIcons {
  icon: StaticImageData;
  height: number;
}
