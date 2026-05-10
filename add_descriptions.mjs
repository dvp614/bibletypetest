import fs from 'fs';

const descriptions = {
  PETER: {
    bestMatchDescription: "충동적인 성향을 세심함과 성실함으로 안정적으로 보완해 주며 시너지를 냅니다.",
    worstMatchDescription: "원대한 비전과 신중함이 직관적이고 빠른 실행력과 부딪혀 속도 차이를 낼 수 있습니다."
  },
  PAUL: {
    bestMatchDescription: "강력한 추진력과 분석적인 검증 능력이 만나 가장 혁신적이고 전략적인 결과를 이룹니다.",
    worstMatchDescription: "체계적인 목표 지향성과 즉흥적 대처 방식의 차이로 인해 진행 과정에서 갈등을 빚을 수 있습니다."
  },
  MARY: {
    bestMatchDescription: "헌신적이고 따뜻한 태도가 자유로운 에너지를 감싸 안아주며 안정적인 관계를 형성합니다.",
    worstMatchDescription: "안정을 추구하는 성향과 끊임없이 새로운 도전을 향하는 개척 정신이 서로 벅차게 느껴질 수 있습니다."
  },
  DAVID: {
    bestMatchDescription: "풍부한 감수성과 깊은 통찰력이 만나 서로의 내면을 깊이 공감하고 위로하는 이상적인 조합입니다.",
    worstMatchDescription: "유연하고 감정을 중시하는 접근 방식이 논리적이고 목표 중심적인 방식에 압박감을 느낄 수 있습니다."
  },
  JOSEPH: {
    bestMatchDescription: "철저한 치밀함이 활동적인 면모를 안정시키고, 동시에 에너지를 공급받으며 조화를 이룹니다.",
    worstMatchDescription: "객관적이고 계획적인 성향이 낙관적이고 즉흥적인 결정을 온전히 이해하는 데 어려움을 겪을 수 있습니다."
  },
  ESTHER: {
    bestMatchDescription: "신중함 속에 숨겨진 굳건한 내면이 예술적 공감 능력과 만나 깊은 정서적 교감을 나눌 수 있습니다.",
    worstMatchDescription: "통찰과 직관을 중시하는 성향에게 지나치게 분석적이고 현실적인 접근은 다소 경직되게 다가올 수 있습니다."
  },
  MOSES: {
    bestMatchDescription: "원대한 비전으로 짊어진 무거운 짐에 묵묵하고 변치 않는 지지가 큰 위로와 안식처가 되어줍니다.",
    worstMatchDescription: "장기적인 사명에 집중하는 시각과 현재의 순간에 충실하며 즉흥적인 시야가 서로 엇갈릴 수 있습니다."
  },
  RUTH: {
    bestMatchDescription: "조용하지만 굳건한 헌신이 강력한 사명감을 가진 리더를 만났을 때 흔들림 없는 안정감을 얻습니다.",
    worstMatchDescription: "따뜻한 관계성을 중요하게 여기는 성향에게 성과와 목표를 우선하는 태도는 다소 냉정하게 느껴질 수 있습니다."
  },
  DANIEL: {
    bestMatchDescription: "장기적인 안목과 명철한 통찰이 낙관적인 개척 정신과 결합하여 놀라운 현실적 가능성을 창출합니다.",
    worstMatchDescription: "혁신과 미래를 바라보는 성향에게 안정과 현재에 충실한 방식은 서로의 장점을 발휘할 접점을 찾기 어려울 수 있습니다."
  },
  NOAH: {
    bestMatchDescription: "묵묵히 원칙을 지키는 굳건한 태도에 다채로운 감수성이 더해지면 일상에 따뜻한 활력을 불어넣을 수 있습니다.",
    worstMatchDescription: "주어진 자리를 끝까지 지키려는 성향과 끊임없이 새로운 세계로 뻗어나가는 삶의 방향성이 크게 다릅니다."
  },
  ABRAHAM: {
    bestMatchDescription: "도전적이고 낙관적인 에너지를 명철한 논리와 분석적 시각이 현실적으로 뒷받침해 주어 날개를 단 격입니다.",
    worstMatchDescription: "미지의 영역으로 확장하려는 자유로운 성향은 통제되고 철저히 계획된 상황을 선호하는 방식과 충돌할 수 있습니다."
  },
  GIDEON: {
    bestMatchDescription: "객관적이고 분석적인 검증 능력이 결단력 있고 추진력 있는 리더십의 빈틈을 완벽하게 보좌해 줍니다.",
    worstMatchDescription: "논리와 검증을 최우선으로 하는 성향에게 헌신과 감정적 교류에 집중하는 방식은 논리적 이해를 구하기 어려울 수 있습니다."
  }
};

let content = fs.readFileSync('src/constants.ts', 'utf-8');

// Update Character interface
content = content.replace(
  /y: string\]: number \};\n  \}\[\];\n\}\n\nexport interface Character \{([\s\S]*?)bestMatch: string;\n  worstMatch: string;\n\}/g,
  "y: string]: number };\n  }[];\n}\n\nexport interface Character {$1bestMatch: string;\n  bestMatchDescription: string;\n  worstMatch: string;\n  worstMatchDescription: string;\n}"
);

// Update each character
for (const [id, desc] of Object.entries(descriptions)) {
  const regex = new RegExp(`("${id}": \\{[\\s\\S]*?bestMatch: ".*?"),\\n(\\s*worstMatch: ".*?")(\\n\\s*\\})`, 'g');
  content = content.replace(regex, (match, p1, p2, p3) => {
    return `${p1},\n    bestMatchDescription: "${desc.bestMatchDescription}",\n${p2},\n    worstMatchDescription: "${desc.worstMatchDescription}"${p3}`;
  });
}

fs.writeFileSync('src/constants.ts', content);
