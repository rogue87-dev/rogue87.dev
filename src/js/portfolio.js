import { loadElem } from "./modules/ElemLoader";

// this is a temporary solution
const content = [
  `<figure style="
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-bottom: 30px;
    ">
      <embed 
        src="https://wakatime.com/share/@018ba21d-1073-4759-958b-3d1dc68c6943/710b3bc5-18e3-4dd0-8b62-0caa2f949722.svg"
        style="
        height: 90vh;
        "
      ></embed>

      
      <embed 
        src="https://wakatime.com/share/@018ba21d-1073-4759-958b-3d1dc68c6943/6340235b-2147-4a46-b68d-fe158458162b.svg"
        style="height: 80vh;"
        >
      </embed>

    </figure>`,
];

const options = [dashboard = document.getElementById("dashboard")];

dashboard.addEventListener("click", () => {
  const elem = document.getElementById("content");
  loadElem(elem, content[0]);
});