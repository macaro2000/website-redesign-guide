import image0 from "@/assets/cv/signature-bug.gif.asset.json";
import image1 from "@/assets/cv/tilting-axis_300.png.asset.json";
import image2 from "@/assets/cv/moving-triennale-2014.jpg.asset.json";
import image3 from "@/assets/cv/resartis.jpg.asset.json";
import image4 from "@/assets/cv/diss-cover.jpg.asset.json";
import image5 from "@/assets/cv/joedavid_e_250.jpg.asset.json";
import image6 from "@/assets/cv/nwlegacy_poster-ol.jpg.asset.json";
import image7 from "@/assets/cv/treepeople_e-invitation.jpg.asset.json";
import image8 from "@/assets/cv/small-poster.jpg.asset.json";
import image9 from "@/assets/cv/ahny_logo_72dpi_rgb.jpg.asset.json";
import image10 from "@/assets/cv/without.jpg.asset.json";
import image11 from "@/assets/cv/2014-11-20_185538.jpg.asset.json";
import image12 from "@/assets/cv/manifestations.jpg.asset.json";
import image13 from "@/assets/cv/critical-conversations.jpg.asset.json";
import image14 from "@/assets/cv/hispanic.jpg.asset.json";
import image15 from "@/assets/cv/carvers2.jpg.asset.json";
import image16 from "@/assets/cv/cultural.jpg.asset.json";
import image17 from "@/assets/cv/withinthecircle.jpg.asset.json";
import image18 from "@/assets/cv/gyeonggi.jpg.asset.json";
import image19 from "@/assets/cv/bijutsu-techo-2024.webp.asset.json";
import image20 from "@/assets/cv/jeffrey-gibson-2025.jpg.asset.json";

// Absolute asset addresses also work when this project is hosted on Cloudflare.
const ASSET_ORIGIN = "https://id-preview--e0abf544-2eab-4a1f-91f4-d84f011ebccd.lovable.app";
function storedImageUrl(path: string) {
  return new URL(path, ASSET_ORIGIN).href;
}

export const cvImages: Record<string, string> = {
  "signature%20bug.gif": storedImageUrl(image0.url),
  "tilting%20axis_300.png": storedImageUrl(image1.url),
  "Moving%20Triennale%202014.jpg": storedImageUrl(image2.url),
  "resartis.jpg": storedImageUrl(image3.url),
  "diss%20cover.jpg": storedImageUrl(image4.url),
  "JoeDavid_E_250.jpg": storedImageUrl(image5.url),
  "NWLegacy_Poster%20OL.jpg": storedImageUrl(image6.url),
  "TreePeople_E-Invitation.jpg": storedImageUrl(image7.url),
  "small%20poster.jpg": storedImageUrl(image8.url),
  "AHNY_Logo_72dpi_RGB.jpg": storedImageUrl(image9.url),
  "without.jpg": storedImageUrl(image10.url),
  "2014-11-20_185538.jpg": storedImageUrl(image11.url),
  "manifestations.jpg": storedImageUrl(image12.url),
  "critical-conversations.jpg": storedImageUrl(image13.url),
  "hispanic.jpg": storedImageUrl(image14.url),
  "carvers2.jpg": storedImageUrl(image15.url),
  "cultural.jpg": storedImageUrl(image16.url),
  "withinthecircle.jpg": storedImageUrl(image17.url),
  "Gyeonggi.jpg": storedImageUrl(image18.url),
  "bijutsu-techo-2024.webp": storedImageUrl(image19.url),
  "jeffrey-gibson-2025.jpg": storedImageUrl(image20.url),
};
