/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: { [key: string]: number };
  }[];
}

export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  mbti: string;
  traits: string[];
  verse: {
    krv: string;
    rnksv: string;
    klb: string;
  };
  imageUrl: string;
  strengths: string[];
  weaknesses: string[];
  bestMatch: string;
  bestMatchDescription: string;
  worstMatch: string;
  worstMatchDescription: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "공동체 성벽을 재건하는 큰 프로젝트를 맡게 되었습니다. 당신이 선호하는 방식은?",
    options: [
      {
        text: "수많은 사람을 독려하고 조직하여 활기차게 현장을 지휘한다.",
        scores: { extraversion: 2, drive: 1 }
      },
      {
        text: "조용히 기도하며 설계도를 점검하고 사람들의 필요를 하나하나 살핀다.",
        scores: { introversion: 2, composure: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "이해하기 어려운 비전이나 꿈을 꾸었을 때, 당신의 첫 반응은?",
    options: [
      {
        text: "비전의 본질적인 의미와 장기적인 가치를 깊이 고찰한다.",
        scores: { intuition: 2, vision: 1 }
      },
      {
        text: "이 비전이 현재 나의 상황에서 어떻게 실현 가능한지 현실적으로 따져본다.",
        scores: { sensing: 2, structure: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "두 여인이 한 아이의 어머니라고 주장하는 상황에서 판결을 내려야 합니다. 당신의 판단 기준은?",
    options: [
      {
        text: "객관적인 정황과 논리적 추론을 통해 누구의 말에 모순이 있는지 찾는다.",
        scores: { thinking: 2, justice: 1 }
      },
      {
        text: "어머니로서의 본능적인 사랑과 감정적 반응을 살펴 진짜 마음을 읽어낸다.",
        scores: { feeling: 2, harmony: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "광야를 지나는 여정에서 하나님이 새로운 길을 지시하셨습니다. 당신의 스타일은?",
    options: [
      {
        text: "이미 세워진 원칙과 규례를 철저히 지키며 안정적으로 이동한다.",
        scores: { judging: 2, order: 1 }
      },
      {
        text: "그때그때 주시는 영감에 따라 상황에 맞춰 유연하고 신속하게 대응한다.",
        scores: { perceiving: 2, flexibility: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "복음을 전해야 하는 상황이 왔습니다. 당신이 더 편안함을 느끼는 장소는?",
    options: [
      {
        text: "수많은 인파가 모인 광장이나 북적이는 배 위에서 선포하기.",
        scores: { extraversion: 2, energy: 1 }
      },
      {
        text: "한 사람과 깊이 마주 앉아 조용히 이야기를 나누며 마음 전하기.",
        scores: { introversion: 2, support: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "방주를 지으라는 막막한 명령을 받았습니다. 당신이 가장 중요하게 생각하는 것은?",
    options: [
      {
        text: "명시된 길이, 너비, 재료 등 구체적인 세부 사항을 정확히 준수하는 것.",
        scores: { sensing: 2, structure: 1 }
      },
      {
        text: "홍수 이후에 펼쳐질 새로운 세상과 구원이라는 거대한 비전을 붙잡는 것.",
        scores: { intuition: 2, vision: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "동료가 명백한 실수로 공동체에 피해를 입혔습니다. 당신의 대처는?",
    options: [
      {
        text: "공정한 공동체의 규칙에 따라 실수를 바로잡고 책임을 묻는다.",
        scores: { thinking: 2, justice: 1 }
      },
      {
        text: "그의 마음을 위로하고 공동체의 깨진 관계를 회복하는 것을 우선한다.",
        scores: { feeling: 2, harmony: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "손님을 맞이하는 상황에서 당신은 누구에 더 가깝습니까?",
    options: [
      {
        text: "완벽한 접대를 위해 미리 계획한 일들을 순서대로 바쁘게 처리하는 마르다.",
        scores: { judging: 2, energy: 1 }
      },
      {
        text: "그 순간의 대화와 분위기에 집중하며 상황에 몸을 맡기는 마리아.",
        scores: { perceiving: 2, presence: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "폭풍우가 치는 배 위에서 두려워하는 사람들을 만났을 때, 당신의 행동은?",
    options: [
      {
        text: "앞장서서 '두려워 말라'고 외치며 사람들에게 용기를 북돋운다.",
        scores: { extraversion: 2, drive: 1 }
      },
      {
        text: "침착하게 상황을 살피며 기도로 평정심을 유지하고 주변을 안심시킨다.",
        scores: { introversion: 2, composure: 1 }
      }
    ]
  },
  {
    id: 10,
    text: "성경 말씀을 공부할 때 당신을 더 설레게 하는 방식은?",
    options: [
      {
        text: "역사적 배경, 구체적인 지명, 실생활에 적용할 구체적인 행동 강령 파악.",
        scores: { sensing: 2, structure: 1 }
      },
      {
        text: "말씀 속에 담긴 상징적 의미, 하나님의 큰 구원 계획, 미래적인 통찰 발견.",
        scores: { intuition: 2, vision: 1 }
      }
    ]
  },
  {
    id: 11,
    text: "전쟁터에 나가기 전, 왕에게 조언을 해야 합니다. 당신의 조언 방식은?",
    options: [
      {
        text: "병력의 수, 무기, 지형 등 철저한 데이터와 승률에 기반한 전략 제안.",
        scores: { thinking: 2, strategy: 1 }
      },
      {
        text: "백성들의 사기, 군사들의 마음, 그리고 사명감과 같은 가치에 기반한 격려.",
        scores: { feeling: 2, harmony: 1 }
      }
    ]
  },
  {
    id: 12,
    text: "새로운 성막을 짓기로 했습니다. 당신의 기여 방식은?",
    options: [
      {
        text: "정해진 설계도와 일정표에 맞춰 오차 없이 시공을 마무리하는 관리자.",
        scores: { judging: 2, order: 1 }
      },
      {
        text: "작업 과정에서 생기는 다양한 변수들을 해결하며 창의적으로 적응하는 기술자.",
        scores: { perceiving: 2, flexibility: 1 }
      }
    ]
  },
  {
    id: 13,
    text: "어려운 과제를 해결하기 위해 모인 회의에서 당신은?",
    options: [
      {
        text: "적극적으로 의견을 내고 분위기를 주도하며 결론을 이끌어낸다.",
        scores: { extraversion: 2, drive: 1 }
      },
      {
        text: "다른 이들의 의견을 경청하고 정리하며 신중하게 내 생각을 덧붙인다.",
        scores: { introversion: 2, support: 1 }
      }
    ]
  },
  {
    id: 14,
    text: "여리고 성을 점령하라는 지시를 받았습니다. 당신이 더 주목하는 부분은?",
    options: [
      {
        text: "'매일 한 바퀴, 마지막 날 일곱 바퀴'라는 구체적인 절차와 행동.",
        scores: { sensing: 2, structure: 1 }
      },
      {
        text: "성이 무너진 이후 승리를 통해 하나님이 영광 받으실 거대한 그림.",
        scores: { intuition: 2, vision: 1 }
      }
    ]
  },
  {
    id: 15,
    text: "가까운 친구가 진리를 따르지 않는 행동을 할 때, 당신의 충고는?",
    options: [
      {
        text: "무엇이 잘못되었는지 논리적으로 지적하고 올바른 길을 명확히 제시한다.",
        scores: { thinking: 2, justice: 1 }
      },
      {
        text: "그의 상한 마음을 먼저 공감해주며 따뜻하게 돌아오길 권면한다.",
        scores: { feeling: 2, harmony: 1 }
      }
    ]
  },
  {
    id: 16,
    text: "사역지로 떠날 준비를 할 때, 당신의 짐가방은?",
    options: [
      {
        text: "어떤 상황이 와도 당황하지 않게 필요한 모든 것을 완벽하게 챙긴 가방.",
        scores: { judging: 2, order: 1 }
      },
      {
        text: "일단 꼭 필요한 것만 챙기고 부족한 것은 현장에서 채우기로 한 가방.",
        scores: { perceiving: 2, flexibility: 1 }
      }
    ]
  },
  {
    id: 17,
    text: "축제 자리에 초대받았습니다. 당신이 더 에너지를 얻는 방법은?",
    options: [
      {
        text: "아는 사람들과 인사하고 새로운 사람들과 어울리며 대화 나누기.",
        scores: { extraversion: 2, energy: 1 }
      },
      {
        text: "편안한 소수의 사람과 깊은 대화를 나누거나 조용히 분위기 즐기기.",
        scores: { introversion: 2, composure: 1 }
      }
    ]
  },
  {
    id: 18,
    text: "광야에서의 시험을 이겨낼 때 당신이 붙잡는 것은?",
    options: [
      {
        text: "기록된 말씀의 글자 그대로의 능력과 구체적인 행동 수칙.",
        scores: { sensing: 2, structure: 1 }
      },
      {
        text: "말씀 이면에 흐르는 원대한 사명과 영적인 본질.",
        scores: { intuition: 2, vision: 1 }
      }
    ]
  },
  {
    id: 19,
    text: "갈등이 폭발한 공동체에서 당신의 역할은?",
    options: [
      {
        text: "무엇이 옳고 그른지 공정하게 판가름하여 질서를 바로잡는 심판관.",
        scores: { thinking: 2, justice: 1 }
      },
      {
        text: "양측의 상처를 보듬고 화해를 주선하여 평화를 회복하는 중재자.",
        scores: { feeling: 2, harmony: 1 }
      }
    ]
  },
  {
    id: 20,
    text: "안식일을 지키는 당신의 태도는?",
    options: [
      {
        text: "정해진 예배 시간과 형식, 규례를 엄격하게 준수하며 경건을 지킨다.",
        scores: { judging: 2, order: 1 }
      },
      {
        text: "안식의 본질에 집중하며 그날의 영적 흐름에 따라 자유롭게 은혜를 누린다.",
        scores: { perceiving: 2, flexibility: 1 }
      }
    ]
  }
];

export const CHARACTERS: { [key: string]: Character } = {
  "PETER": {
    id: "PETER",
    name: "베드로",
    title: "열정적인 행동가",
    mbti: "ESFP",
    description: "누구보다 먼저 바다로 뛰어들었던 당신은 뜨거운 열정과 순수함을 가진 사람입니다. 감정이 풍부하고 행동력이 뛰어나 공동체의 분위기 메이커 역할을 합니다.",
    traits: ["열정적", "솔직함", "행동파", "충직함"],
    verse: {
      krv: "시몬 베드로가 대답하여 가로되 주는 그리스도시요 살아 계신 하나님의 아들이시니이다\n(마태복음 16:16)",
      rnksv: "시몬 베드로가 대답하였다. '선생님은 그리스도이시며, 살아 계신 하나님의 아들이십니다.'\n(마태복음 16:16)",
      klb: "시몬 베드로가 '주님은 그리스도시며 살아 계신 하나님의 아드님이십니다' 하고 대답하였다.\n(마태복음 16:16)"
    },
    imageUrl: "/images/peter.svg", // 로컬 파일 사용 시: /images/파일명.svg (public 폴더 기준)
    strengths: ["빠른 실행력", "강한 친화력", "순수한 믿음"],
    weaknesses: ["충동적 결정", "감정 기복", "성급함"],
    bestMatch: "MARY",
    bestMatchDescription: "충동적인 성향을 세심함과 성실함으로 안정적으로 보완해 주며 시너지를 냅니다.",
    worstMatch: "MOSES",
    worstMatchDescription: "원대한 비전과 신중함이 직관적이고 빠른 실행력과 부딪혀 속도 차이를 낼 수 있습니다."
  },
  "PAUL": {
    id: "PAUL",
    name: "사도 바울",
    title: "전략적인 복음 전도자",
    mbti: "ENTJ",
    description: "확고한 목표 의식과 불굴의 의지를 가진 당신은 전략적인 리더입니다. 논리적이고 체계적이며, 어떠한 고난 속에서도 비전을 잃지 않는 강인함이 있습니다.",
    traits: ["논리적", "목표지향", "열정적", "개척자"],
    verse: {
      krv: "나의 달려갈 길과 주 예수께 받은 사명 곧 하나님의 은혜의 복음 증거하는 일을 마치려 함에는 나의 생명조차 조금도 귀한 것으로 여기지 아니하노라\n(사도행전 20:24)",
      rnksv: "내가 나의 달려갈 길을 다 달리고 주 예수에게 받은 사명, 곧 하나님의 은혜의 복음을 증언하는 일을 다 하기만 한다면 나는 내 생명을 조금도 아까운 것으로 여기지 않습니다.\n(사도행전 20:24)",
      klb: "나의 달려갈 길을 다 가고 주 예수님께 받은 사명 곧 하나님의 은혜에 관한 기쁜 소식을 증거하는 일을 완성하기 위해서라면 나의 생명을 조금도 아까운 것으로 여기지 않습니다.\n(사도행전 20:24)"
    },
    imageUrl: "/images/paul.svg",
    strengths: ["철저한 계획", "설득력 있는 소통", "강한 추진력"],
    weaknesses: ["완벽주의", "냉철해 보임", "타인에 대한 높은 기대"],
    bestMatch: "GIDEON",
    bestMatchDescription: "강력한 추진력과 분석적인 검증 능력이 만나 가장 혁신적이고 전략적인 결과를 이룹니다.",
    worstMatch: "PETER",
    worstMatchDescription: "체계적인 목표 지향성과 즉흥적 대처 방식의 차이로 인해 진행 과정에서 갈등을 빚을 수 있습니다."
  },
  "MARY": {
    id: "MARY",
    name: "마리아",
    title: "세심한 준비자와 관찰자",
    mbti: "ISFJ",
    description: "묵묵히 곁을 지키며 섬세하게 필요를 채워주는 당신은 따뜻하고 성실한 사람입니다. 내면이 단단하며, 드러나지 않아도 꼭 필요한 자리를 지키는 신실함이 매력입니다.",
    traits: ["헌신적", "성실함", "공감력", "신중함"],
    verse: {
      krv: "마리아가 가로되 주의 계집종이오니 말씀대로 내게 이루어지이다 하매 천사가 떠나가니라\n(누가복음 1:38)",
      rnksv: "마리아가 말하였다. '보십시오, 나는 주님의 여종입니다. 당신의 말씀대로 나에게 이루어지기를 바랍니다.'\n(누가복음 1:38)",
      klb: "그러자 마리아는 '저는 주님의 종입니다. 말씀하신 대로 저에게 이루어지기를 바랍니다' 하고 대답하였다.\n(누가복음 1:38)"
    },
    imageUrl: "/images/mary.svg",
    strengths: ["섬세한 배려", "책임감", "지속적인 헌신"],
    weaknesses: ["자기희생 과다", "변화에 대한 두려움", "거절의 어려움"],
    bestMatch: "PETER",
    bestMatchDescription: "헌신적이고 따뜻한 태도가 자유로운 에너지를 감싸 안아주며 안정적인 관계를 형성합니다.",
    worstMatch: "ABRAHAM",
    worstMatchDescription: "안정을 추구하는 성향과 끊임없이 새로운 도전을 향하는 개척 정신이 서로 벅차게 느껴질 수 있습니다."
  },
  "DAVID": {
    id: "DAVID",
    name: "다윗",
    title: "공감하는 예술적 리더",
    mbti: "ISFP",
    description: "하나님 마음에 합한 자라고 불렸던 당신은 풍부한 감수성과 공감력을 가진 예술가 스타일입니다. 고난 속에서도 찬양을 잃지 않는 유연함과 겸손함이 돋보입니다.",
    traits: ["창의적", "유연함", "겸손함", "공감왕"],
    verse: {
      krv: "여호와는 나의 목자시니 내가 부족함이 없으리로다\n(시편 23:1)",
      rnksv: "주님은 나의 목자시니, 내게 부족함 없어라.\n(시편 23:1)",
      klb: "여호와는 나의 목자시니 내게 부족함이 없으리로다.\n(시편 23:1)"
    },
    imageUrl: "/images/david.svg",
    strengths: ["창의적인 해결책", "진실된 태도", "유연한 적응력"],
    weaknesses: ["갈등 회피", "감정 과잉", "규칙 속박 거부"],
    bestMatch: "ESTHER",
    bestMatchDescription: "풍부한 감수성과 깊은 통찰력이 만나 서로의 내면을 깊이 공감하고 위로하는 이상적인 조합입니다.",
    worstMatch: "PAUL",
    worstMatchDescription: "유연하고 감정을 중시하는 접근 방식이 논리적이고 목표 중심적인 방식에 압박감을 느낄 수 있습니다."
  },
  "JOSEPH": {
    id: "JOSEPH",
    name: "요셉",
    title: "성실한 계획과 비전가",
    mbti: "ISTJ",
    description: "고난을 축복의 기회로 바꾼 당신은 철저한 준비성과 책임감을 가진 사람입니다. 꾸준함이 무기이며, 상황을 정확히 판단하고 미래를 대비하는 지혜를 가지고 있습니다.",
    traits: ["정직함", "인내력", "분석적", "신뢰감"],
    verse: {
      krv: "당신들은 나를 해하려 하였으나 하나님은 그것을 선으로 바꾸사 오늘과 같이 만민의 생명을 구원하게 하시려 하셨나니\n(창세기 50:20)",
      rnksv: "형님들은 나를 해치려 하였으나, 하나님은 오히려 그것을 선하게 바꾸셔서 오늘날 내가 수많은 사람의 생명을 구원할 수 있게 하셨습니다.\n(창세기 50:20)",
      klb: "당신들은 나를 해치려 하였으나 하나님은 그것을 선으로 바꾸셔서 오늘날 내가 많은 사람들의 생명을 구할 수 있게 하셨습니다.\n(창세기 50:20)"
    },
    imageUrl: "/images/joseph.svg",
    strengths: ["위기 대처 능력", "철저한 성실함", "객관적 분석"],
    weaknesses: ["융통성 부족", "보수적 관점", "지나친 진지함"],
    bestMatch: "PETER",
    bestMatchDescription: "철저한 치밀함이 활동적인 면모를 안정시키고, 동시에 에너지를 공급받으며 조화를 이룹니다.",
    worstMatch: "ABRAHAM",
    worstMatchDescription: "객관적이고 계획적인 성향이 낙관적이고 즉흥적인 결정을 온전히 이해하는 데 어려움을 겪을 수 있습니다."
  },
  "ESTHER": {
    id: "ESTHER",
    name: "에스더",
    title: "용기 있는 전략가",
    mbti: "INFJ",
    description: "죽으면 죽으리라는 각오로 공동체를 구한 당신은 통찰력과 용기를 가진 외유내강형 리더입니다. 차분하고 신중하지만, 결정적인 순간에 발휘하는 담대함이 빛납니다.",
    traits: ["통찰력", "용기", "신중함", "사명감"],
    verse: {
      krv: "죽으면 죽으리이다\n(에스더 4:16)",
      rnksv: "죽어야 한다면, 죽겠습니다.\n(에스더 4:16)",
      klb: "죽게 되면 죽겠습니다.\n(에스더 4:16)"
    },
    imageUrl: "/images/esther.svg",
    strengths: ["깊은 통찰력", "전략적 인내", "강한 신념"],
    weaknesses: ["완벽주의", "비밀스러움", "에너지 소진 위험"],
    bestMatch: "DAVID",
    bestMatchDescription: "신중함 속에 숨겨진 굳건한 내면이 예술적 공감 능력과 만나 깊은 정서적 교감을 나눌 수 있습니다.",
    worstMatch: "JOSEPH",
    worstMatchDescription: "통찰과 직관을 중시하는 성향에게 지나치게 분석적이고 현실적인 접근은 다소 경직되게 다가올 수 있습니다."
  },
  "MOSES": {
    id: "MOSES",
    name: "모세",
    title: "사명을 이끄는 영적 지도자",
    mbti: "INFJ/ENFJ",
    description: "수많은 백성을 이끌고 광야를 지났던 당신은 원대한 비전과 타인을 향한 깊은 책임감을 가진 리더입니다. 때로는 자신의 부족함에 주저하지만, 결국 맡겨진 사명을 완수해내는 강한 의지가 있습니다.",
    traits: ["지도력", "인내심", "사명감", "겸손함"],
    verse: {
      krv: "이제 가라 내가 네 입과 함께 있어서 할 말을 가르치리라\n(출애굽기 4:12)",
      rnksv: "그러니 이제 가거라. 네가 말하는 것을 내가 돕겠다. 네가 할 말을 가르쳐 주겠다.\n(출애굽기 4:12)",
      klb: "자, 이제 가거라. 내가 네 입과 함께하여 네가 할 말을 가르쳐 주겠다.\n(출애굽기 4:12)"
    },
    imageUrl: "/images/moses.svg",
    strengths: ["위대한 비전", "강력한 중재력", "신중한 판단"],
    weaknesses: ["지나친 부담감", "자기 불신", "완벽주의적 성향"],
    bestMatch: "RUTH",
    bestMatchDescription: "원대한 비전으로 짊어진 무거운 짐에 묵묵하고 변치 않는 지지가 큰 위로와 안식처가 되어줍니다.",
    worstMatch: "PETER",
    worstMatchDescription: "장기적인 사명에 집중하는 시각과 현재의 순간에 충실하며 즉흥적인 시야가 서로 엇갈릴 수 있습니다."
  },
  "RUTH": {
    id: "RUTH",
    name: "룻",
    title: "신실한 사랑의 순종자",
    mbti: "INFP/ISFP",
    description: "낯선 땅에서도 변치 않는 사랑으로 헌신했던 당신은 정이 많고 따뜻한 사람입니다. 겉으로 드러나는 화려함보다 내면의 진실함을 소중히 여기며, 한번 맺은 인연을 끝까지 책임지는 의리가 있습니다.",
    traits: ["신실함", "순수한 사랑", "성실성", "회복력"],
    verse: {
      krv: "어머니의 백성이 나의 백성이 되고 어머니의 하나님이 나의 하나님이 되시리니\n(룻기 1:16)",
      rnksv: "어머님의 겨레가 내 겨레요, 어머님의 하나님이 내 하나님입니다.\n(룻기 1:16)",
      klb: "어머니의 나라가 내 나라가 되고 어머니의 하나님이 내 하나님이 되실 것입니다.\n(룻기 1:16)"
    },
    imageUrl: "/images/ruth.svg",
    strengths: ["한결같은 성실함", "깊은 공감 능력", "회복 탄력성"],
    weaknesses: ["결단력 부족", "지나친 적응력", "자기 주장 표현의 어려움"],
    bestMatch: "MOSES",
    bestMatchDescription: "조용하지만 굳건한 헌신이 강력한 사명감을 가진 리더를 만났을 때 흔들림 없는 안정감을 얻습니다.",
    worstMatch: "PAUL",
    worstMatchDescription: "따뜻한 관계성을 중요하게 여기는 성향에게 성과와 목표를 우선하는 태도는 다소 냉정하게 느껴질 수 있습니다."
  },
  "DANIEL": {
    id: "DANIEL",
    name: "다니엘",
    title: "흔들리지 않는 지혜의 조언자",
    mbti: "INTJ",
    description: "어떠한 유혹과 위협 앞에서도 자신의 신념을 지켰던 당신은 지혜롭고 명철한 사람입니다. 논리적인 분석력과 영적인 통찰력을 동시에 갖추고 있으며, 장기적인 안목으로 미래를 대비하는 탁월함이 있습니다.",
    traits: ["지혜로움", "신념", "명철함", "장기적 안목"],
    verse: {
      krv: "다니엘은 마음이 민첩하여 총독들과 방백들 위에 뛰어나므로\n(다니엘 6:3)",
      rnksv: "다니엘이 다른 총리들이나 지방 장관들보다 더 우수하였으므로\n(다니엘 6:3)",
      klb: "다니엘은 아주 총명하여 다른 모든 총리들과 지휘관들보다 훨씬 뛰어났으므로\n(다니엘 6:3)"
    },
    imageUrl: "/images/daniel.svg",
    strengths: ["논리적 분석력", "확고한 정체성", "창의적 문제해결"],
    weaknesses: ["개인주의", "냉소적 태도", "감정 표현의 서투름"],
    bestMatch: "ABRAHAM",
    bestMatchDescription: "장기적인 안목과 명철한 통찰이 낙관적인 개척 정신과 결합하여 놀라운 현실적 가능성을 창출합니다.",
    worstMatch: "MARY",
    worstMatchDescription: "혁신과 미래를 바라보는 성향에게 안정과 현재에 충실한 방식은 서로의 장점을 발휘할 접점을 찾기 어려울 수 있습니다."
  },
  "NOAH": {
    id: "NOAH",
    name: "노아",
    title: "묵묵히 길을 걷는 순종의 건축가",
    mbti: "ISTJ",
    description: "비가 오지 않는 날에도 방주를 지었던 당신은 꾸준함과 인내심의 대명사입니다. 주변의 시선에 흔들리지 않고 자신에게 주어진 일을 묵묵히 수행하며, 원칙을 소중히 여기는 신뢰할 수 있는 사람입니다.",
    traits: ["성실함", "인내심", "원칙주의", "실행력"],
    verse: {
      krv: "노아가 그와 같이 하여 하나님이 자기에게 명하신 대로 다 준행하였더라\n(창세기 6:22)",
      rnksv: "노아는 하나님이 명하신 대로 다 하였다.\n(창세기 6:22)",
      klb: "노아는 하나님이 명령하신 대로 다 수행하였다.\n(창세기 6:22)"
    },
    imageUrl: "/images/noah.svg",
    strengths: ["탁월한 추진력", "변함없는 신뢰성", "세밀한 실행"],
    weaknesses: ["융통성 부족", "보수적인 사고", "새로운 환경에 대한 저항"],
    bestMatch: "DAVID",
    bestMatchDescription: "묵묵히 원칙을 지키는 굳건한 태도에 다채로운 감수성이 더해지면 일상에 따뜻한 활력을 불어넣을 수 있습니다.",
    worstMatch: "ABRAHAM",
    worstMatchDescription: "주어진 자리를 끝까지 지키려는 성향과 끊임없이 새로운 세계로 뻗어나가는 삶의 방향성이 크게 다릅니다."
  },
  "ABRAHAM": {
    id: "ABRAHAM",
    name: "아브라함",
    title: "축복의 통로가 된 믿음의 조상",
    mbti: "ENFP",
    description: "본토 친척 아비 집을 떠나 약속의 땅으로 향했던 당신은 새로운 도전을 두려워하지 않는 개척자입니다. 사람들을 환대하며 원대한 비전을 향해 나아가는 따뜻한 리더십의 소유자입니다.",
    traits: ["개척정신", "환대", "비전가", "순종"],
    verse: {
      krv: "내가 너로 큰 민족을 이루고 네게 복을 주어 네 이름을 창대케 하리니 너는 복의 근원이 될찌라\n(창세기 12:2)",
      rnksv: "내가 너를 큰 민족이 되게 하고, 너에게 복을 주어서, 네 이름을 떨치게 하겠다. 너는 복의 근원이 될 것이다.\n(창세기 12:2)",
      klb: "내가 너를 큰 민족의 조상이 되게 하고 너에게 복을 주어 네 이름을 떨치게 하겠다. 너는 다른 사람들에게 복을 끼치는 자가 될 것이다.\n(창세기 12:2)"
    },
    imageUrl: "/images/abraham.svg",
    strengths: ["위험 감수 능력", "강한 회복 탄력성", "포용력 있는 리더십"],
    weaknesses: ["지나친 낙관주의", "우유부단함", "현실적 세부사항 간과"],
    bestMatch: "DANIEL",
    bestMatchDescription: "도전적이고 낙관적인 에너지를 명철한 논리와 분석적 시각이 현실적으로 뒷받침해 주어 날개를 단 격입니다.",
    worstMatch: "JOSEPH",
    worstMatchDescription: "미지의 영역으로 확장하려는 자유로운 성향은 통제되고 철저히 계획된 상황을 선호하는 방식과 충돌할 수 있습니다."
  },
  "GIDEON": {
    id: "GIDEON",
    name: "기드온",
    title: "확신을 구하는 신중한 용사",
    mbti: "INTP",
    description: "양털 시험을 통해 하나님의 뜻을 확인했던 당신은 분석적이고 신중한 사람입니다. 스스로를 작게 여기지만, 확신이 섰을 때 발휘하는 지략과 용기는 공동체를 위기에서 구하는 큰 힘이 됩니다.",
    traits: ["분석적", "지략가", "신중함", "겸손함"],
    verse: {
      krv: "여호와께서 그에게 이르시되 너는 이 네 힘을 의지하고 가서 이스라엘을 미디안의 손에서 구원하라 내가 너를 보낸 것이 아니냐\n(사사기 6:14)",
      rnksv: "주님께서 그를 바라보시며 말씀하셨다. '너에게 있는 그 힘을 가지고 가서, 이스라엘을 미디안의 손에서 구해 내어라. 내가 직접 너를 보낸다.'\n(사사기 6:14)",
      klb: "그러자 여호와께서는 그를 돌아보시며 '너는 가서 네가 가진 그 힘으로 이스라엘을 미디안 사람들의 손에서 구출하라. 내가 너를 보내지 않느냐?' 하고 말씀하셨다.\n(사사기 6:14)"
    },
    imageUrl: "/images/gideon.svg",
    strengths: ["전략적 사고", "객관적 검증", "효율적인 문제해결"],
    weaknesses: ["지나친 의구심", "행동 지연", "비판적인 성향"],
    bestMatch: "PAUL",
    bestMatchDescription: "객관적이고 분석적인 검증 능력이 결단력 있고 추진력 있는 리더십의 빈틈을 완벽하게 보좌해 줍니다.",
    worstMatch: "MARY",
    worstMatchDescription: "논리와 검증을 최우선으로 하는 성향에게 헌신과 감정적 교류에 집중하는 방식은 논리적 이해를 구하기 어려울 수 있습니다."
  }
};
