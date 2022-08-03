// import { countLine } from "./drawPopulation";
// import { Point } from "./Point";

// 단어 break해서라도 네모박스 라인 맞추기 위한 함수
export function lineBreak(inString, limit) {
  let point = 0;
  let brString = [];
  let n = 0;
  while (inString.length > limit) {
    n++;
    point = inString.slice(0, limit).lastIndexOf("");
    if (point === -1) {
      brString += inString.slice(0, limit) + "<br>";
      inString = inString.slice(limit);
    } else {
      brString += inString.slice(0, point) + "<br>";
      inString = inString.slice(point + 1);
    }
  }
  n++;
  brString += inString;
  return [n, brString];
}

export function drawInfoTrial(
  durationPoint,
  startPoint,
  startH,
  legendPoint,
  objPoint,
  titlePoint,
  officialPoint,
  numArm,
  infoTrial
) {
  const [objectiveLine, objective] = lineBreak("Objective: " + infoTrial.objective, 83);
  const [titleLine, title] = lineBreak("Title: " + infoTrial.title, 67);
  const [officialTitleLine, officialTitle] = lineBreak("Official Title: " + infoTrial.officialTitle, 98);
  const completeTime = infoTrial.completeTime + " months<br>required to complete";
  
  const yRange = [officialPoint.y - officialTitleLine / 10, titlePoint.y + titleLine / 10]
  return {
    data: [
      {
        x: [durationPoint.x, durationPoint.x],
        y: [durationPoint.y, durationPoint.y + startH * 4 / 3],
        mode: "lines",
        line: {
          color: "rgba(1,1,1,1)",
          width: 1,
        },
        showlegend: false,
        hoverinfo: 'skip', // branch 라인 위에 마우스 올렸을 때 데이터 보이지 않도록 설정
      },
    ],
    layout: {
      annotations: [
        { //objective
          x: objPoint.x,
          y: objPoint.y,
          text: objective,
          showarrow: false,
          xanchor: 'left',
          yanchor: "bottom",
          font: {
            size: 13,
          },
          bordercolor: '#c7c7c7',
          align: 'left',
          name: ['infoTrial', 'objective'],
          // captureevents: true,
        },
        { //title
          x: titlePoint.x,
          y: titlePoint.y,
          text: title,
          showarrow: false,
          xanchor: 'left',
          yanchor: "bottom",
          font: {
            size: 16,
          },
          bordercolor: '#c7c7c7',
          align: 'left',
          name: ['infoTrial', 'title'],
          // captureevents: true,
        },
        { // official title
          x: officialPoint.x,
          y: legendPoint.y - startH / 3,
          text: officialTitle,
          showarrow: false,
          xanchor: 'left',
          yanchor: 'top',
          font: {
            size: 11,
          },
          bordercolor: '#c7c7c7',
          align: 'left',
          name: ['infoTrial', 'officialTitle'],
          // captureevents: true,
        },
        { // complete time
          x: durationPoint.x,
          y: durationPoint.y - 0.05,
          text: completeTime,
          showarrow: false,
          font: {
            size: 8,
          },
          name: ['infoTrial', 'completeTime'],
        }
      ]
    },
    yRange: yRange,
  };
}
