
export type Language = 'ko' | 'en';

export interface Question {
  id: number;
  category: 'EI' | 'SN' | 'TF' | 'JP';
  text: Record<Language, string>;
  options: {
    text: Record<Language, string>;
    scores: { [key: string]: number };
  }[];
}

export interface BibleVerse {
  version: string;
  text: string;
}

export interface Character {
  id: string;
  name: Record<Language, string>;
  title: Record<Language, string>;
  description: Record<Language, string>;
  traits: Record<Language, string[]>;
  verse: Record<Language, BibleVerse[]>;
  imageUrl: string;
  resultImageUrl: string;
  strengths: Record<Language, string[]>;
  weaknesses: Record<Language, string[]>;
  bestMatches: { id: string, description: Record<Language, string> }[];
  worstMatches: { id: string, description: Record<Language, string> }[];
}

export const QUESTIONS: Question[] = [
  {
    "id": 1,
    "category": "EI",
    "text": {
      "ko": "공동체 성벽을 재건하는 큰 프로젝트를 맡게 되었습니다. 당신이 선호하는 방식은?",
      "en": "You have been entrusted with a large project to rebuild the community walls. Which method do you prefer?"
    },
    "options": [
      {
        "text": {
          "ko": "수많은 사람을 독려하고 조직하여 활기차게 현장을 지휘한다.",
          "en": "Encourage and organize a large number of people and lead the field energetically."
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "조용히 기도하며 설계도를 점검하고 사람들의 필요를 하나하나 살핀다.",
          "en": "Pray quietly, check the blueprint, and look into each and every need of the people."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 5,
    "category": "EI",
    "text": {
      "ko": "복음을 전해야 하는 상황이 왔습니다. 당신이 더 편안함을 느끼는 장소는?",
      "en": "You are in a situation where you need to share the gospel. Where do you feel more comfortable?"
    },
    "options": [
      {
        "text": {
          "ko": "수많은 인파가 모인 광장이나 북적이는 배 위에서 선포하기.",
          "en": "Proclaiming in a square where a large number of people have gathered or on a crowded ship."
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "한 사람과 깊이 마주 앉아 조용히 이야기를 나누며 마음 전하기.",
          "en": "Sit face to face with one person, talk quietly, and convey your feelings."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 9,
    "category": "EI",
    "text": {
      "ko": "폭풍우가 치는 배 위에서 두려워하는 사람들을 만났을 때, 당신의 행동은?",
      "en": "What do you do when you encounter fearful people on a boat in a storm?"
    },
    "options": [
      {
        "text": {
          "ko": "앞장서서 '두려워 말라'고 외치며 사람들에게 용기를 북돋운다.",
          "en": "Take the lead and encourage people by shouting, ‘Don’t be afraid.’"
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "침착하게 상황을 살피며 기도로 평정심을 유지하고 주변을 안심시킨다.",
          "en": "Calmly assess the situation, maintain composure through prayer, and reassure those around you."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 13,
    "category": "EI",
    "text": {
      "ko": "어려운 과제를 해결하기 위해 모인 회의에서 당신은?",
      "en": "In a meeting gathered to solve a difficult task, what do you do?"
    },
    "options": [
      {
        "text": {
          "ko": "적극적으로 의견을 내고 분위기를 주도하며 결론을 이끌어낸다.",
          "en": "Actively express opinions, lead the mood, and draw conclusions."
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "다른 이들의 의견을 경청하고 정리하며 신중하게 내 생각을 덧붙인다.",
          "en": "Listen to and organize the opinions of others and carefully add my own thoughts."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 17,
    "category": "EI",
    "text": {
      "ko": "축제 자리에 초대받았습니다. 당신이 더 에너지를 얻는 방법은?",
      "en": "You are invited to a festival. How do you get more energy?"
    },
    "options": [
      {
        "text": {
          "ko": "아는 사람들과 인사하고 새로운 사람들과 어울리며 대화 나누기.",
          "en": "Say hello to people you know, meet new people, and have conversations."
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "편안한 소수의 사람과 깊은 대화를 나누거나 조용히 분위기 즐기기.",
          "en": "Have a deep conversation with a few comfortable people or just enjoy the quiet atmosphere."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 24,
    "category": "EI",
    "text": {
      "ko": "교회에서 새로운 봉사를 제안받았을 때 당신의 반응은?",
      "en": "How do you react when asked to take on a new role at church?"
    },
    "options": [
      {
        "text": {
          "ko": "재밌고 의미 있어 보인다면 일단 '네!' 하고 기쁘게 수락한다.",
          "en": "If it seems fun and meaningful, first say 'yes!' And I happily accept it."
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "현재의 나의 상황과 감당 가능 여부를 진지하게 먼저 숙고해 본다.",
          "en": "First, seriously consider your current situation and whether you can afford it."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 27,
    "category": "EI",
    "text": {
      "ko": "낯선 사역지에 처음 도착했을 때 당신의 모습은?",
      "en": "What do you do when you first arrive at an unfamiliar ministry location?"
    },
    "options": [
      {
        "text": {
          "ko": "사람들에게 먼저 다가가 인사를 건네며 빠르게 관계를 형성한다.",
          "en": "Build relationships quickly by approaching people first and saying hello."
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "주변 상황을 조용히 관찰하며 분위기를 익히는 데 시간을 보낸다.",
          "en": "Spend time quietly observing your surroundings and familiarizing yourself with the atmosphere."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 31,
    "category": "EI",
    "text": {
      "ko": "긴 하루의 사역을 마치고 돌아왔을 때, 어떤 시간이 당신을 더 회복시키나요?",
      "en": "When you return from a long day of ministry, what time of day restores you more?"
    },
    "options": [
      {
        "text": {
          "ko": "가까운 동료들과 오늘 있었던 일을 나누며 웃고 떠드는 시간.",
          "en": "A time to laugh and talk about what happened today with close colleagues."
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "혼자만의 공간에서 조용히 말씀을 묵상하거나 일기를 쓰는 시간.",
          "en": "Time to quietly meditate on the Word or write in a diary in your own space."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 32,
    "category": "EI",
    "text": {
      "ko": "새로운 성경 공부 모임을 시작한다면, 당신이 선호하는 모임의 형태는?",
      "en": "If you are starting a new Bible study group, what type of group would you prefer?"
    },
    "options": [
      {
        "text": {
          "ko": "다양한 사람들과 자유롭게 토론하고 생각을 활발히 나누는 모임.",
          "en": "A meeting where people from all walks of life can discuss freely and actively share their thoughts."
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "소수의 인원이 깊이 있는 텍스트를 함께 탐구하며 조용히 나누는 모임.",
          "en": "A small gathering where participants quietly explore texts in depth together."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 33,
    "category": "EI",
    "text": {
      "ko": "공동체 내에서 당신이 주로 맡는 역할은 어떤 것인가요?",
      "en": "What is your main role in the community?"
    },
    "options": [
      {
        "text": {
          "ko": "전면에 나서서 행사를 주도하고 사람들의 참여를 이끄는 사회자.",
          "en": "A moderator who comes to the forefront and leads the event and encourages people to participate."
        },
        "scores": {
          "extraversion": 2
        }
      },
      {
        "text": {
          "ko": "보이지 않는 곳에서 상황을 조율하고 서포트하는 조용한 운영자.",
          "en": "A quiet operator who coordinates and supports situations behind the scenes."
        },
        "scores": {
          "introversion": 2
        }
      }
    ]
  },
  {
    "id": 14,
    "category": "SN",
    "text": {
      "ko": "여리고 성을 점령하라는 지시를 받았습니다. 당신이 더 주목하는 부분은?",
      "en": "We were instructed to capture the city of Jericho. What do you pay more attention to?"
    },
    "options": [
      {
        "text": {
          "ko": "'매일 한 바퀴, 마지막 날 일곱 바퀴'라는 구체적인 절차와 행동.",
          "en": "Specific procedures and actions such as ‘one lap every day and seven laps on the last day’."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "성이 무너진 이후 승리를 통해 하나님이 영광 받으실 거대한 그림.",
          "en": "A huge picture of God being glorified through victory after the fall of the castle."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 18,
    "category": "SN",
    "text": {
      "ko": "광야에서의 시험을 이겨낼 때 당신이 붙잡는 것은?",
      "en": "What do you hold on to when overcoming trials in the wilderness?"
    },
    "options": [
      {
        "text": {
          "ko": "기록된 말씀의 글자 그대로의 능력과 구체적인 행동 수칙.",
          "en": "The literal power of the written Word and specific rules of conduct."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "말씀 이면에 흐르는 원대한 사명과 영적인 본질.",
          "en": "The grand mission and spiritual essence that flows behind the Word."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 21,
    "category": "SN",
    "text": {
      "ko": "중요한 결정을 앞두고 있을 때, 당신이 가장 신뢰하는 것은?",
      "en": "When you're facing an important decision, what do you trust most?"
    },
    "options": [
      {
        "text": {
          "ko": "과거에 검증된 사례와 구체적인 경험적 데이터.",
          "en": "Past proven cases and specific empirical data."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "기도 중에 느껴지는 강렬한 영감과 미래에 대한 확신.",
          "en": "Intense inspiration and confidence in the future felt during prayer."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 28,
    "category": "SN",
    "text": {
      "ko": "기도 응답이 지체될 때 당신의 내면에서 일어나는 현상은?",
      "en": "What happens inside you when prayer answers are delayed?"
    },
    "options": [
      {
        "text": {
          "ko": "약속된 말씀을 다시 한번 확인하며 인내로 현실을 견뎌낸다.",
          "en": "Confirm the promised words once again and endure reality with patience."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "고난 뒤에 숨겨진 하나님의 더 큰 뜻과 미래적 계획을 상상해 본다.",
          "en": "Imagine God’s greater will and future plan hidden behind suffering."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 34,
    "category": "SN",
    "text": {
      "ko": "설교를 들을 때, 당신의 마음을 더 울리는 스타일은 어떠한 것인가요?",
      "en": "When listening to a sermon, which style resonates more with you?"
    },
    "options": [
      {
        "text": {
          "ko": "실제 삶에서 바로 실천할 수 있는 생생한 예화와 적용 중심의 설교.",
          "en": "Vivid illustrations and application-oriented sermons that can be put into practice in real life."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "우리의 생각과 시각을 넓여주는 영적인 통찰과 비전 중심의 설교.",
          "en": "A sermon centered on spiritual insight and vision that expands our thoughts and perspectives."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 35,
    "category": "SN",
    "text": {
      "ko": "어떤 일을 시작할 때 당신이 먼저 확인하는 것은?",
      "en": "What do you check first when starting something?"
    },
    "options": [
      {
        "text": {
          "ko": "지금 당장 해야 할 일들의 목록과 필요한 자원들.",
          "en": "A list of things you need to do right now and the resources you need."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "이 일이 궁극적으로 지향하는 목적과 전체적인 그림.",
          "en": "The ultimate goal and overall picture of this work."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 36,
    "category": "SN",
    "text": {
      "ko": "비유로 가득한 예수님의 가르침을 들었을 때 당신은?",
      "en": "What do you think when you hear Jesus’ teachings full of parables?"
    },
    "options": [
      {
        "text": {
          "ko": "그 비유가 가르치는 구체적인 삶의 방식을 파악하려 노력한다.",
          "en": "Try to figure out the specific way of life that the parable teaches."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "비유 이면에 숨겨진 하나님 나라의 오묘한 비밀을 상상해본다.",
          "en": "Imagine the mysterious secret of God's kingdom hidden behind the parable."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 3,
    "category": "TF",
    "text": {
      "ko": "두 여인이 한 아이의 어머니라고 주장하는 상황에서 판결을 내려야 합니다. 당신의 판단 기준은?",
      "en": "A decision must be made in a situation where two women claim to be the mothers of a child. What is your judgment standard?"
    },
    "options": [
      {
        "text": {
          "ko": "객관적인 정황과 논리적 추론을 통해 누구의 말에 모순이 있는지 찾는다.",
          "en": "Find out whose words are contradictory through objective circumstances and logical reasoning."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "어머니로서의 본능적인 사랑과 감정적 반응을 살펴 진짜 마음을 읽어낸다.",
          "en": "It reads her true heart by examining her instinctive love and emotional response as a mother."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 7,
    "category": "TF",
    "text": {
      "ko": "동료가 명백한 실수로 공동체에 피해를 입혔습니다. 당신의 대처는?",
      "en": "A colleague made an obvious mistake that caused harm to the community. How do you deal with it?"
    },
    "options": [
      {
        "text": {
          "ko": "공정한 공동체의 규칙에 따라 실수를 바로잡고 책임을 묻는다.",
          "en": "Correct mistakes and hold accountable according to the rules of a fair community."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "그의 마음을 위로하고 공동체의 깨진 관계를 회복하는 것을 우선한다.",
          "en": "Priority is given to comforting his heart and restoring broken relationships in the community."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 11,
    "category": "TF",
    "text": {
      "ko": "전쟁터에 나가기 전, 왕에게 조언을 해야 합니다. 당신의 조언 방식은?",
      "en": "Before going to battle, you must give advice to the king. What is your advice style?"
    },
    "options": [
      {
        "text": {
          "ko": "병력의 수, 무기, 지형 등 철저한 데이터와 승률에 기반한 전략 제안.",
          "en": "Strategy suggestions based on thorough data and win rate, including number of troops, weapons, and terrain."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "백성들의 사기, 군사들의 마음, 그리고 사명감과 같은 가치에 기반한 격려.",
          "en": "Encouragement based on values ​​such as the morale of the people, the heart of the soldiers, and a sense of duty."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 2,
    "category": "SN",
    "text": {
      "ko": "이해하기 어려운 비전이나 꿈을 꾸었을 때, 당신의 첫 반응은?",
      "en": "When you have a vision or dream that is difficult to understand, what is your first reaction?"
    },
    "options": [
      {
        "text": {
          "ko": "비전의 본질적인 의미와 장기적인 가치를 깊이 고찰한다.",
          "en": "We deeply consider the essential meaning and long-term value of the vision."
        },
        "scores": {
          "intuition": 2
        }
      },
      {
        "text": {
          "ko": "이 비전이 현재 나의 상황에서 어떻게 실현 가능한지 현실적으로 따져본다.",
          "en": "I realistically consider how this vision can be realized in my current situation."
        },
        "scores": {
          "sensing": 2
        }
      }
    ]
  },
  {
    "id": 6,
    "category": "SN",
    "text": {
      "ko": "방주를 지으라는 막막한 명령을 받았습니다. 당신이 가장 중요하게 생각하는 것은?",
      "en": "I received a vague command to build an ark. What do you consider most important?"
    },
    "options": [
      {
        "text": {
          "ko": "명시된 길이, 너비, 재료 등 구체적인 세부 사항을 정확히 준수하는 것.",
          "en": "Exact adherence to specific details such as stated length, width, and material."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "홍수 이후에 펼쳐질 새로운 세상과 구원이라는 거대한 비전을 붙잡는 것.",
          "en": "Holding on to the grand vision of a new world and salvation that will unfold after the flood."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 10,
    "category": "SN",
    "text": {
      "ko": "성경 말씀을 공부할 때 당신을 더 설레게 하는 방식은?",
      "en": "What method excites you more when studying the Bible?"
    },
    "options": [
      {
        "text": {
          "ko": "역사적 배경, 구체적인 지명, 실생활에 적용할 구체적인 행동 강령 파악.",
          "en": "Identify historical background, specific place names, and specific codes of conduct to apply in real life."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "말씀 속에 담긴 상징적 의미, 하나님의 큰 구원 계획, 미래적인 통찰 발견.",
          "en": "Discover the symbolic meaning contained in the Word, God's great plan of salvation, and future insight."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 14,
    "category": "SN",
    "text": {
      "ko": "여리고 성을 점령하라는 지시를 받았습니다. 당신이 더 주목하는 부분은?",
      "en": "We were instructed to capture the city of Jericho. What do you pay more attention to?"
    },
    "options": [
      {
        "text": {
          "ko": "매일 한 바퀴, 마지막 날 일곱 바퀴'라는 구체적인 절차와 행동.",
          "en": "Specific procedures and actions such as ‘one lap every day and seven laps on the last day’."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "성이 무너진 이후 승리를 통해 하나님이 영광 받으실 거대한 그림.",
          "en": "A huge picture of God being glorified through victory after the fall of the castle."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 18,
    "category": "SN",
    "text": {
      "ko": "광야에서의 시험을 이겨낼 때 당신이 붙잡는 것은?",
      "en": "What do you hold on to when overcoming trials in the wilderness?"
    },
    "options": [
      {
        "text": {
          "ko": "기록된 말씀의 글자 그대로의 능력과 구체적인 행동 수칙.",
          "en": "The literal power of the written Word and specific rules of conduct."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "말씀 이면에 흐르는 원대한 사명과 영적인 본질.",
          "en": "The grand mission and spiritual essence that flows behind the Word."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 21,
    "category": "SN",
    "text": {
      "ko": "중요한 결정을 앞두고 있을 때, 당신이 가장 신뢰하는 것은?",
      "en": "When you're facing an important decision, what do you trust most?"
    },
    "options": [
      {
        "text": {
          "ko": "과거에 검증된 사례와 구체적인 경험적 데이터.",
          "en": "Past proven cases and specific empirical data."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "기도 중에 느껴지는 강렬한 영감과 미래에 대한 확신.",
          "en": "Intense inspiration and confidence in the future felt during prayer."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 28,
    "category": "SN",
    "text": {
      "ko": "기도 응답이 지체될 때 당신의 내면에서 일어나는 현상은?",
      "en": "What happens inside you when prayer answers are delayed?"
    },
    "options": [
      {
        "text": {
          "ko": "약속된 말씀을 다시 한번 확인하며 인내로 현실을 견뎌낸다.",
          "en": "Confirm the promised words once again and endure reality with patience."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "고난 뒤에 숨겨진 하나님의 더 큰 뜻과 미래적 계획을 상상해 본다.",
          "en": "Imagine God’s greater will and future plan hidden behind suffering."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 34,
    "category": "SN",
    "text": {
      "ko": "설교를 들을 때, 당신의 마음을 더 울리는 스타일은 어떠한 것인가요?",
      "en": "When listening to a sermon, which style resonates more with you?"
    },
    "options": [
      {
        "text": {
          "ko": "실제 삶에서 바로 실천할 수 있는 생생한 예화와 적용 중심의 설교.",
          "en": "Vivid illustrations and application-oriented sermons that can be put into practice in real life."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "우리의 생각과 시각을 넓여주는 영적인 통찰과 비전 중심의 설교.",
          "en": "A sermon centered on spiritual insight and vision that expands our thoughts and perspectives."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 35,
    "category": "SN",
    "text": {
      "ko": "어떤 일을 시작할 때 당신이 먼저 확인하는 것은?",
      "en": "What do you check first when starting something?"
    },
    "options": [
      {
        "text": {
          "ko": "지금 당장 해야 할 일들의 목록과 필요한 자원들.",
          "en": "A list of things you need to do right now and the resources you need."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "이 일이 궁극적으로 지향하는 목적과 전체적인 그림.",
          "en": "The ultimate goal and overall picture of this work."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 36,
    "category": "SN",
    "text": {
      "ko": "비유로 가득한 예수님의 가르침을 들었을 때 당신은?",
      "en": "What do you think when you hear Jesus’ teachings full of parables?"
    },
    "options": [
      {
        "text": {
          "ko": "그 비유가 가르치는 구체적인 삶의 방식을 파악하려 노력한다.",
          "en": "Try to figure out the specific way of life that the parable teaches."
        },
        "scores": {
          "sensing": 2
        }
      },
      {
        "text": {
          "ko": "비유 이면에 숨겨진 하나님 나라의 오묘한 비밀을 상상해본다.",
          "en": "Imagine the mysterious secret of God's kingdom hidden behind the parable."
        },
        "scores": {
          "intuition": 2
        }
      }
    ]
  },
  {
    "id": 3,
    "category": "TF",
    "text": {
      "ko": "두 여인이 한 아이의 어머니라고 주장하는 상황에서 판결을 내려야 합니다. 당신의 판단 기준은?",
      "en": "A decision must be made in a situation where two women claim to be the mothers of a child. What is your judgment standard?"
    },
    "options": [
      {
        "text": {
          "ko": "객관적인 정황과 논리적 추론을 통해 누구의 말에 모순이 있는지 찾는다.",
          "en": "Find out whose words are contradictory through objective circumstances and logical reasoning."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "어머니로서의 본능적인 사랑과 감정적 반응을 살펴 진짜 마음을 읽어낸다.",
          "en": "It reads her true heart by examining her instinctive love and emotional response as a mother."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 7,
    "category": "TF",
    "text": {
      "ko": "동료가 명백한 실수로 공동체에 피해를 입혔습니다. 당신의 대처는?",
      "en": "A colleague made an obvious mistake that caused harm to the community. How do you deal with it?"
    },
    "options": [
      {
        "text": {
          "ko": "공정한 공동체의 규칙에 따라 실수를 바로잡고 책임을 묻는다.",
          "en": "Correct mistakes and hold accountable according to the rules of a fair community."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "그의 마음을 위로하고 공동체의 깨진 관계를 회복하는 것을 우선한다.",
          "en": "Priority is given to comforting his heart and restoring broken relationships in the community."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 11,
    "category": "TF",
    "text": {
      "ko": "전쟁터에 나가기 전, 왕에게 조언을 해야 합니다. 당신의 조언 방식은?",
      "en": "Before going to battle, you must give advice to the king. What is your advice style?"
    },
    "options": [
      {
        "text": {
          "ko": "병력의 수, 무기, 지형 등 철저한 데이터와 승률에 기반한 전략 제안.",
          "en": "Strategy suggestions based on thorough data and win rate, including number of troops, weapons, and terrain."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "백성들의 사기, 군사들의 마음, 그리고 사명감과 같은 가치에 기반한 격려.",
          "en": "Encouragement based on values ​​such as the morale of the people, the heart of the soldiers, and a sense of duty."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 15,
    "category": "TF",
    "text": {
      "ko": "가까운 친구가 진리를 따르지 않는 행동을 할 때, 당신의 충고는?",
      "en": "When a close friend does something that does not follow the truth, what is your advice?"
    },
    "options": [
      {
        "text": {
          "ko": "무엇이 잘못되었는지 논리적으로 지적하고 올바른 길을 명확히 제시한다.",
          "en": "Logically points out what is wrong and clearly suggests the right path."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "그의 상한 마음을 먼저 공감해주며 따뜻하게 돌아오길 권면한다.",
          "en": "First, I sympathize with his broken heart and warmly encourage him to come back."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 19,
    "category": "TF",
    "text": {
      "ko": "갈등이 폭발한 공동체에서 당신의 역할은?",
      "en": "What is your role in a community where conflict has exploded?"
    },
    "options": [
      {
        "text": {
          "ko": "무엇이 옳고 그른지 공정하게 판가름하여 질서를 바로잡는 심판관.",
          "en": "A judge who restores order by fairly judging what is right and wrong."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "양측의 상처를 보듬고 화해를 주선하여 평화를 회복하는 중재자.",
          "en": "A mediator who restores peace by comforting the wounds of both sides and arranging reconciliation."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 23,
    "category": "TF",
    "text": {
      "ko": "나의 신앙적 고민을 털어놓을 대상을 고른다면?",
      "en": "If I were to choose someone to share my religious concerns with, what would it be?"
    },
    "options": [
      {
        "text": {
          "ko": "나의 상황을 온전히 이해하고 따뜻하게 위로해 줄 수 있는 분.",
          "en": "Someone who fully understands my situation and can comfort me warmly."
        },
        "scores": {
          "feeling": 2
        }
      },
      {
        "text": {
          "ko": "문제의 핵심을 짚어주고 냉철하고 현명한 해결책을 제시해 줄 분.",
          "en": "Someone who will point out the core of the problem and suggest a cool-headed and wise solution."
        },
        "scores": {
          "thinking": 2
        }
      }
    ]
  },
  {
    "id": 26,
    "category": "TF",
    "text": {
      "ko": "비판적인 세상 사람들 앞에서 복음을 변증해야 한다면?",
      "en": "What if you had to defend the gospel in front of a critical world?"
    },
    "options": [
      {
        "text": {
          "ko": "정확한 성경적 근거와 논리적 변증으로 그들을 설득한다.",
          "en": "Persuade them with accurate biblical evidence and logical argument."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "삶으로 보여준 헌신과 선한 영향력으로 그들의 마음을 녹인다.",
          "en": "We melt their hearts with the dedication and good influence we show in our lives."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 30,
    "category": "TF",
    "text": {
      "ko": "동료와의 사소한 언쟁 후 당신의 마음 정리는?",
      "en": "How do you clear your mind after a minor argument with a co-worker?"
    },
    "options": [
      {
        "text": {
          "ko": "누가 왜 잘못했는지 사건의 인과관계를 명확히 짚고 넘어간다.",
          "en": "Let's clearly point out the causal relationship between the incident and who was at fault and why."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "서로의 감정이 상하지 않았는지 살피고 관계의 화합을 도모한다.",
          "en": "Check to see if each other's feelings are hurt and promote harmony in the relationship."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 37,
    "category": "TF",
    "text": {
      "ko": "공동체의 규율을 어긴 사람을 징계해야 하는 회의에서 당신은?",
      "en": "What about you in a meeting where you have to discipline someone who breaks the rules of the community?"
    },
    "options": [
      {
        "text": {
          "ko": "공동체의 원칙과 질서를 위해 예외 없는 단호한 처분을 주장한다.",
          "en": "We insist on decisive action without exception for the sake of community principles and order."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "그럴 수밖에 없었던 사정을 고려하여 재기의 기회를 주자고 제안한다.",
          "en": "Considering the circumstances that led to such a situation, I propose that we give it a chance to make a comeback."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 38,
    "category": "TF",
    "text": {
      "ko": "당신이 생각하는 '사랑'에 더 가까운 모습은 무엇인가요?",
      "en": "What do you think is closer to ‘love’?"
    },
    "options": [
      {
        "text": {
          "ko": "그 사람에게 진정으로 필요한 것이 무엇인지 정확히 짚어주는 것.",
          "en": "Pointing out exactly what that person truly needs."
        },
        "scores": {
          "thinking": 2
        }
      },
      {
        "text": {
          "ko": "그 사람의 감정에 깊이 공감하고 함께 아파하며 곁에 있어 주는 것.",
          "en": "Deeply sympathizing with that person's feelings, suffering with them, and being by their side."
        },
        "scores": {
          "feeling": 2
        }
      }
    ]
  },
  {
    "id": 4,
    "category": "JP",
    "text": {
      "ko": "광야를 지나는 여정에서 하나님이 새로운 길을 지시하셨습니다. 당신의 스타일은?",
      "en": "On our journey through the wilderness, God instructed us on a new path. What is your style?"
    },
    "options": [
      {
        "text": {
          "ko": "이미 세워진 원칙과 규례를 철저히 지키며 안정적으로 이동한다.",
          "en": "Move stably while strictly following established principles and regulations."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "그때그때 주시는 영감에 따라 상황에 맞춰 유연하고 신속하게 대응한다.",
          "en": "We respond flexibly and quickly to the situation according to the inspiration given at that time."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  },
  {
    "id": 8,
    "category": "JP",
    "text": {
      "ko": "손님을 맞이하는 상황에서 당신은 누구에 더 가깝습니까?",
      "en": "Who are you closer to when it comes to welcoming guests?"
    },
    "options": [
      {
        "text": {
          "ko": "완벽한 접대를 위해 미리 계획한 일들을 순서대로 바쁘게 처리하는 마르다.",
          "en": "Martha is busy carrying out the pre-planned tasks in order for the perfect reception."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "그 순간의 대화와 분위기에 집중하며 상황에 몸을 맡기는 마리아.",
          "en": "Maria surrenders herself to the situation, focusing on the conversation and atmosphere of the moment."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  },
  {
    "id": 12,
    "category": "JP",
    "text": {
      "ko": "새로운 성막을 짓기로 했습니다. 당신의 기여 방식은?",
      "en": "It was decided to build a new tabernacle. How do you contribute?"
    },
    "options": [
      {
        "text": {
          "ko": "정해진 설계도와 일정표에 맞춰 오차 없이 시공을 마무리하는 관리자.",
          "en": "A manager who completes construction without error according to the set blueprint and schedule."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "작업 과정에서 생기는 다양한 변수들을 해결하며 창의적으로 적응하는 기술자.",
          "en": "A technician who adapts creatively by resolving various variables that arise during the work process."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  },
  {
    "id": 16,
    "category": "JP",
    "text": {
      "ko": "사역지로 떠날 준비를 할 때, 당신의 짐가방은?",
      "en": "When preparing to leave for the ministry, what should you pack?"
    },
    "options": [
      {
        "text": {
          "ko": "어떤 상황이 와도 당황하지 않게 필요한 모든 것을 완벽하게 챙긴 가방.",
          "en": "A bag that contains everything you need so you don't panic no matter what the situation."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "일단 꼭 필요한 것만 챙기고 부족한 것은 현장에서 채우기로 한 가방.",
          "en": "First of all, I decided to take only the essentials and fill the bag with anything I needed on site."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  },
  {
    "id": 20,
    "category": "JP",
    "text": {
      "ko": "안식일을 지키는 당신의 태도는?",
      "en": "What is your attitude toward observing the Sabbath?"
    },
    "options": [
      {
        "text": {
          "ko": "정해진 예배 시간과 형식, 규례를 엄격하게 준수하며 경건을 지킨다.",
          "en": "Maintain piety by strictly observing the designated worship time, format, and regulations."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "안식의 본질에 집중하며 그날의 영적 흐름에 따라 자유롭게 은혜를 누린다.",
          "en": "Focus on the essence of rest and freely enjoy grace according to the spiritual flow of the day."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  },
  {
    "id": 22,
    "category": "JP",
    "text": {
      "ko": "동역자와 함께 사역할 때 당신을 더 힘들게 하는 상황은?",
      "en": "What situations make it more difficult for you when working with co-workers?"
    },
    "options": [
      {
        "text": {
          "ko": "철저한 계획 없이 주먹구구식으로 일이 진행될 때.",
          "en": "When things proceed in a haphazard manner without a thorough plan."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "지나치게 통제적이고 규칙을 강조하여 자유로운 실행이 막힐 때.",
          "en": "When freedom of action is blocked by being too controlling and emphasizing rules."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  },
  {
    "id": 25,
    "category": "JP",
    "text": {
      "ko": "성경 통독을 할 때 당신이 더 선호하는 스타일은?",
      "en": "What style do you prefer when reading through the Bible?"
    },
    "options": [
      {
        "text": {
          "ko": "매일 정해진 분량을 체크하며 목표를 완수하는 성취 지향형.",
          "en": "Achievement-oriented type who completes goals by checking a set amount every day."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "그날그날 마음에 닿는 말씀에 머물며 깊이 묵상하는 영감 지향형.",
          "en": "An inspiration-oriented person who stays and meditates deeply on the words that touch his heart each day."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  },
  {
    "id": 29,
    "category": "JP",
    "text": {
      "ko": "공동체 내에서 당신이 더 선망받는 재능은?",
      "en": "What talent are you more admired in the community?"
    },
    "options": [
      {
        "text": {
          "ko": "복잡한 사안을 명쾌하게 정리하고 체계적으로 관리하는 능력.",
          "en": "Ability to clearly organize and systematically manage complex issues."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "상황에 따라 유연하게 대처하며 창의적 대안을 제시하는 능력.",
          "en": "Ability to respond flexibly to situations and suggest creative alternatives."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  },
  {
    "id": 39,
    "category": "JP",
    "text": {
      "ko": "중요한 신앙 캠프의 조장으로 임명되었습니다. 당신의 첫 행동은?",
      "en": "He was appointed leader of an important religious camp. What is your first action?"
    },
    "options": [
      {
        "text": {
          "ko": "전체 일정표와 조별 활동 계획안을 먼저 작성하고 공유한다.",
          "en": "First, write and share the overall schedule and group activity plan."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "일단 조원들과 만나서 친해진 뒤, 분위기에 맞춰 세부 계획을 짠다.",
          "en": "After meeting with the group members and becoming friendly with them, we make a detailed plan according to the mood."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  },
  {
    "id": 40,
    "category": "JP",
    "text": {
      "ko": "당신이 더 편안함을 느끼는 업무 환경은?",
      "en": "What work environment do you feel more comfortable in?"
    },
    "options": [
      {
        "text": {
          "ko": "데드라인이 명확하고 단계별 목표가 뚜렷하게 잡힌 환경.",
          "en": "An environment with clear deadlines and clear step-by-step goals."
        },
        "scores": {
          "judging": 2
        }
      },
      {
        "text": {
          "ko": "상황에 따라 일정이 유동적이고 창의적인 시도가 권장되는 환경.",
          "en": "An environment where schedules are flexible and creative attempts are encouraged."
        },
        "scores": {
          "perceiving": 2
        }
      }
    ]
  }
];

export const CHARACTERS: Record<string, Character> = {
  "PETER": {
    "id": "PETER",
    "name": {
      "ko": "베드로",
      "en": "Peter"
    },
    "title": {
      "ko": "열정적인 신념의 행동가",
      "en": "activist with passionate beliefs"
    },
    "description": {
      "ko": "누구보다 먼저 바다로 뛰어들었던 당신은 뜨거운 열정과 압도적인 행동력을 가진 사람입니다. 당신의 믿음은 복잡한 머리보다 정직한 가슴에서 시작됩니다. 감정이 풍부하고 솔직하여 공동체의 에너지를 끌어올리는 천성적인 분위기 메이커이지만, 때로는 그 뜨거운 열정이 감정의 기복이나 성급한 판단으로 이어지기도 합니다. 하지만 당신의 가장 큰 강점은 실수를 두려워하지 않고 다시 일어서는 회복 탄력성과 주를 향한 순수한 헌신에 있습니다.",
      "en": "You, who jumped into the sea before anyone else, are a person with intense passion and overwhelming drive. Your faith begins with an honest heart rather than a complicated head. You are emotional and honest, a natural mood-maker who raises the energy of the community, but sometimes that intense passion can lead to emotional ups and downs or hasty judgments. However, your greatest strength lies in your resilience to rise again without fear of making mistakes, and your pure devotion to the Lord."
    },
    "traits": {
      "ko": [
        "열정적 실행력",
        "정직한 감정표현",
        "압도적 친화력",
        "순수한 헌신"
      ],
      "en": [
        "Passionate execution ability",
        "honest expression of emotions",
        "overwhelming friendliness",
        "pure devotion"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "시몬 베드로가 대답하여 가로되 주는 그리스도시요 살아 계신 하나님의 아들이시니이다\n(마태복음 16:16)"
        },
        {
          "version": "rnksv",
          "text": "시몬 베드로가 대답하였다. '선생님은 그리스도이시며, 살아 계신 하나님의 아들이십니다.'\n(마태복음 16:16)"
        },
        {
          "version": "klb",
          "text": "시몬 베드로가 '주님은 그리스도시며 살아 계신 하나님의 아드님이십니다' 하고 대답하였다.\n(마태복음 16:16)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "Simon Peter answered, “You are the Messiah, the Son of the living God.”\n(Matthew 16:16)"
        },
        {
          "version": "nlt",
          "text": "Simon Peter answered, “You are the Messiah, the Son of the living God.”\n(Matthew 16:16)"
        },
        {
          "version": "kjv",
          "text": "And Simon Peter answered and said, Thou art the Christ, the Son of the living God.\n(Matthew 16:16)"
        },
        {
          "version": "esv",
          "text": "Simon Peter replied, “You are the Christ, the Son of the living God.”\n(Matthew 16:16)"
        }
      ]
    },
    "imageUrl": "/images/peter.png",
    "resultImageUrl": "/images/results/peter_result.png",
    "strengths": {
      "ko": [
        "빠른 상황 대처와 추진력",
        "타인의 마음을 얻는 친화력",
        "단순하고 강력한 믿음의 고백"
      ],
      "en": [
        "Quick response to situations and driving force",
        "Ability to win the hearts of others",
        "A simple and powerful confession of faith"
      ]
    },
    "weaknesses": {
      "ko": [
        "감정에 치우친 충동적 결정",
        "세밀한 마무리 부족",
        "직관적 반응으로 인한 성급함"
      ],
      "en": [
        "Impulsive decisions driven by emotions",
        "Lack of detailed finishing",
        "Impatience due to intuitive reactions"
      ]
    },
    "bestMatches": [
      {
        "id": "MARY",
        "description": {
          "ko": "베드로의 거침없는 추진력이 방향을 잃지 않도록 마리아의 세밀한 보살핌이 정서적 안전판 역할을 하며, 현장의 에너지를 실질적인 사역의 열매로 연결시킵니다.",
          "en": "Mary's detailed care acts as an emotional safety valve to prevent Peter's unstoppable drive from losing direction, and connects the energy in the field to the fruits of practical ministry."
        }
      },
      {
        "id": "DAVID",
        "description": {
          "ko": "현장을 압도하는 폭발적인 행동력과 다윗의 깊은 영적 감수성이 시너지를 내어, 공동체에 가식 없는 기쁨과 가장 원색적인 영적 활력을 불어넣습니다.",
          "en": "The explosive action that overwhelms the field and David's deep spiritual sensitivity create synergy, infusing the community with unpretentious joy and the most raw spiritual vitality."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "PAUL",
        "description": {
          "ko": "치밀한 논리와 체계를 중시하는 바울에게 베드로의 즉흥적인 반응은 불확실한 변수로 다가올 수 있어, 상호 신뢰를 위한 명확한 역할 분담이 필수적입니다.",
          "en": "For Paul, who values ​​detailed logic and system, Peter's spontaneous reaction may come across as an uncertain variable, so a clear division of roles for mutual trust is essential."
        }
      },
      {
        "id": "ESTHER",
        "description": {
          "ko": "침착하게 본질을 관망하며 완벽한 때를 기다리는 신중함에게 베드로의 열정적 직설은 자칫 무모한 리스크로 비춰질 수 있어 긴밀한 소통이 요구됩니다.",
          "en": "Peter's passionate directness could be seen as a reckless risk to the cautious person who calmly observes the essence and waits for the perfect moment, so close communication is required."
        }
      }
    ]
  },
  "PAUL": {
    "id": "PAUL",
    "name": {
      "ko": "사도 바울",
      "en": "apostle paul"
    },
    "title": {
      "ko": "불굴의 의지를 가진 전략적 리더",
      "en": "Strategic leader with an indomitable will"
    },
    "description": {
      "ko": "확고한 목표 의식과 철저한 논리를 바탕으로 세상을 변화시키는 전략적 개척자입니다. 당신은 어떠한 고난과 역경 속에서도 흔들리지 않는 강인한 정신력을 소유하고 있으며, 복잡한 사안을 분석하여 명확한 비전을 제시하는 데 탁월합니다. 완벽을 기하는 성향과 냉철한 판단력은 사역의 완성도를 높여주지만, 때로는 그 높은 기준이 자신과 타인을 압박하거나 차갑다는 오해를 사기도 합니다. 하지만 당신의 냉철함 이면에는 영혼을 향한 뜨거운 사랑과 사명에 대한 지칠 줄 모르는 열망이 흐르고 있습니다.",
      "en": "A strategic pioneer who changes the world based on a firm sense of purpose and thorough logic. You have a strong mentality that does not waver in any hardship or adversity, and you are excellent at analyzing complex issues and presenting a clear vision. The tendency to strive for perfection and cool-headed judgment increase the level of completeness of ministry, but sometimes those high standards can be misunderstood as being cold or oppressive to oneself and others. But beneath your coolness lies a passionate love for your soul and an unquenchable desire for mission."
    },
    "traits": {
      "ko": [
        "철저한 논리력",
        "불굴의 목표의식",
        "체계적 비전제시",
        "주도적 리더십"
      ],
      "en": [
        "thorough logic",
        "An indomitable sense of purpose",
        "Systematic vision presentation",
        "proactive leadership"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "나의 달려갈 길과 주 예수께 받은 사명 곧 하나님의 은혜의 복음 증거하는 일을 마치려 함에는 나의 생명조차 조금도 귀한 것으로 여기지 아니하노라\n(사도행전 20:24)"
        },
        {
          "version": "rnksv",
          "text": "내가 나의 달려갈 길을 다 달리고 주 예수에게 받은 사명, 곧 하나님의 은혜의 복음을 증언하는 일을 다 하기만 한다면 나는 내 생명을 조금도 아까운 것으로 여기지 않습니다.\n(사도행전 20:24)"
        },
        {
          "version": "klb",
          "text": "나의 달려갈 길을 다 가고 주 예수님께 받은 사명 곧 하나님의 은혜에 관한 기쁜 소식을 증거하는 일을 완성하기 위해서라면 나의 생명을 조금도 아까운 것으로 여기지 않습니다.\n(사도행전 20:24)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "However, I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me—the task of testifying to the good news of God’s grace.\n(Acts 20:24)"
        },
        {
          "version": "nlt",
          "text": "But my life is worth nothing to me unless I use it for finishing the work assigned me by the Lord Jesus—the work of telling others the Good News about the wonderful grace of God.\n(Acts 20:24)"
        },
        {
          "version": "kjv",
          "text": "But none of these things move me, neither count I my life dear unto myself, so that I might finish my course with joy, and the ministry, which I have received of the Lord Jesus, to testify the gospel of the grace of God.\n(Acts 20:24)"
        },
        {
          "version": "esv",
          "text": "But I do not account my life of any value nor as precious to myself, if only I may finish my course and the ministry that I received from the Lord Jesus, to testify to the gospel of the grace of God.\n(Acts 20:24)"
        }
      ]
    },
    "imageUrl": "/images/paul.png",
    "resultImageUrl": "/images/results/paul_result.png",
    "strengths": {
      "ko": [
        "분석적 사고를 통한 전략 수립",
        "대중을 설득하는 강력한 소통력",
        "한계를 돌파하는 추진력"
      ],
      "en": [
        "Establishment of strategy through analytical thinking",
        "Strong communication skills to persuade the public",
        "Driving force to break through limits"
      ]
    },
    "weaknesses": {
      "ko": [
        "지나친 완벽주의와 자기 검열",
        "과업 중심적 사고로 인한 관계 소홀",
        "타인에 대한 높은 기대치"
      ],
      "en": [
        "Excessive perfectionism and self-censorship",
        "Neglect of relationships due to task-oriented thinking",
        "high expectations of others"
      ]
    },
    "bestMatches": [
      {
        "id": "GIDEON",
        "description": {
          "ko": "기드온의 예리한 데이터 분석력과 바울의 불굴의 돌파력이 결합하여, 가장 낮은 리스크로 가장 혁신적인 개척 성과를 만들어내는 완벽한 지략가 듀오가 됩니다.",
          "en": "Gideon's keen data analysis skills and Paul's indomitable breakthrough power combine to create the perfect strategist duo that creates the most innovative pioneering achievements with the lowest risk."
        }
      },
      {
        "id": "JOSEPH",
        "description": {
          "ko": "바울이 제시하는 원대한 사론(思路)이 요셉의 철저한 관리력과 만나, 이론에 머물지 않는 완성도 높은 실질적 결과물로 구체화되는 실행력을 보여줍니다.",
          "en": "The grand theory presented by Paul meets Joseph's thorough management ability, showing the power of execution that is materialized into highly complete practical results that go beyond theory."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "PETER",
        "description": {
          "ko": "논리적 인과관계를 최우선으로 하는 바울에게 감정과 직관에 의지해 먼저 발을 딛는 베드로의 방식은 통제 불가능한 위험 요소로 느껴져 마찰을 빚을 수 있습니다.",
          "en": "For Paul, who prioritizes logical cause-and-effect relationships, Peter's method of taking the first step, relying on emotions and intuition, may feel like an uncontrollable risk factor and cause friction."
        }
      },
      {
        "id": "DAVID",
        "description": {
          "ko": "성과와 효율을 극대화하려는 냉철한 태도가 영성과 감성적 교감을 우선시하는 다윗의 유연한 접근 방식과는 사역의 우선순위 설정에서 부딪힐 수 있습니다.",
          "en": "The cool-headed attitude of maximizing performance and efficiency may clash with David's flexible approach that prioritizes spirituality and emotional connection when setting priorities for ministry."
        }
      }
    ]
  },
  "MARY": {
    "id": "MARY",
    "name": {
      "ko": "마리아",
      "en": "maria"
    },
    "title": {
      "ko": "신실함을 간직한 세심한 헌신자",
      "en": "A faithful and attentive devotee"
    },
    "description": {
      "ko": "드러나지 않는 곳에서 묵묵히 곁을 지키며 섬세하게 필요를 채워주는 당신은 공동체의 따뜻한 안식처 같은 사람입니다. 작은 부분도 놓치지 않는 세심함과 한결같은 성실함은 사람들에게 깊은 신뢰를 줍니다. 내면이 매우 단단하여 어떠한 환경에서도 자신에게 맡겨진 소임을 끝까지 완수하는 책임감을 보여줍니다. 다만 타인을 배려하는 마음이 너무 큰 나머지 자신의 목소리를 내는 데 주저하거나, 갑작스러운 변화 앞에서 불안함을 느끼기도 합니다. 하지만 당신의 조용한 헌신은 세상 어떤 화려함보다 강력하게 하나님의 사랑을 증명해냅니다.",
      "en": "You are a warm haven in the community, quietly staying by their side in an unseen place and delicately meeting their needs. Your meticulous attention to detail and consistent sincerity give people deep trust. You are very strong on the inside and show a great sense of responsibility to complete the tasks entrusted to you in any environment. However, because you are so considerate of others, you may be hesitant to raise your voice or feel anxious in the face of sudden changes. But your quiet devotion proves God’s love more powerfully than any extravagance in the world."
    },
    "traits": {
      "ko": [
        "섬세한 공감력",
        "신실한 책임감",
        "정서적 지지자",
        "신중한 관찰자"
      ],
      "en": [
        "delicate empathy",
        "faithful responsibility",
        "emotional supporter",
        "a careful observer"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "마리아가 가로되 주의 계집종이오니 말씀대로 내게 이루어지이다 하매 천사가 떠나가니라\n(누가복음 1:38)"
        },
        {
          "version": "rnksv",
          "text": "마리아가 말하였다. '보십시오, 나는 주님의 여종입니다. 당신의 말씀대로 나에게 이루어지기를 바랍니다.'\n(누가복음 1:38)"
        },
        {
          "version": "klb",
          "text": "그러자 마리아는 '저는 주님의 종입니다. 말씀하신 대로 저에게 이루어지기를 바랍니다' 하고 대답하였다.\n(누가복음 1:38)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "“I am the Lord’s servant,” Mary answered. “May your word to me be fulfilled.” Then the angel left her.\n(Luke 1:38)"
        },
        {
          "version": "nlt",
          "text": "Mary responded, “I am the Lord’s servant. May everything you have said about me come true.” And then the angel left her.\n(Luke 1:38)"
        },
        {
          "version": "kjv",
          "text": "And Mary said, Behold the handmaid of the Lord; be it unto me according to thy word. And the angel departed from her.\n(Luke 1:38)"
        },
        {
          "version": "esv",
          "text": "And Mary said, “Behold, I am the servant of the Lord; let it be to me according to your word.” And the angel departed from her.\n(Luke 1:38)"
        }
      ]
    },
    "imageUrl": "/images/mary.png",
    "resultImageUrl": "/images/results/mary_result.png",
    "strengths": {
      "ko": [
        "타인의 필요를 읽는 예민한 관찰력",
        "안정감을 주는 지속적인 성실함",
        "공동체 화합을 이끄는 포용력"
      ],
      "en": [
        "Keen observation skills to read the needs of others",
        "Continuous sincerity that provides stability",
        "Tolerance that leads to community harmony"
      ]
    },
    "weaknesses": {
      "ko": [
        "자기 주장을 펴기 어려워함",
        "급격한 변화에 대한 심리적 저항",
        "거절하지 못해 가중되는 피로감"
      ],
      "en": [
        "Difficulty asserting yourself",
        "Psychological resistance to rapid change",
        "Exacerbated fatigue from not being able to refuse"
      ]
    },
    "bestMatches": [
      {
        "id": "PETER",
        "description": {
          "ko": "마리아의 조용하고 세심한 서포트가 베드로의 거친 열정을 정서적으로 보듬어주며, 공동체 내에서 가장 인간적이고 따뜻한 관계 중심의 팀워크를 형성합니다.",
          "en": "Maria's quiet and attentive support emotionally comforts Peter's wild passion, forming teamwork centered on the most humane and warm relationships within the community."
        }
      },
      {
        "id": "NOAH",
        "description": {
          "ko": "한결같은 인내와 성실함을 기본값으로 가진 두 사람의 만남은, 시간이 흘러도 변치 않는 공동체의 가장 견고하고 신뢰할 수 있는 동역의 뿌리가 됩니다.",
          "en": "The meeting of two people with consistent patience and sincerity as their defaults becomes the root of the most solid and reliable partnership in a community that will not change over time."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "ABRAHAM",
        "description": {
          "ko": "안정적인 자리에서 내면의 성장을 선호하는 마리아에게, 끊임없이 불확실한 미래를 향해 떠나자고 독려하는 아브라함의 개척 정신은 큰 심리적 에너지를 소모하게 합니다.",
          "en": "For Maria, who prefers inner growth in a stable position, Abraham's pioneering spirit, which constantly encourages her to leave for an uncertain future, consumes a lot of psychological energy."
        }
      },
      {
        "id": "GIDEON",
        "description": {
          "ko": "헌신과 정서적 지지를 사역의 핵심으로 보는 마리아에게, 모든 것을 차가운 논리와 객관적 검증으로만 필터링하는 기드온의 태도는 거리감을 느끼게 할 수 있습니다.",
          "en": "For Mary, who sees dedication and emotional support as the core of her ministry, Gideon's attitude of filtering everything only through cold logic and objective verification can make her feel distant."
        }
      }
    ]
  },
  "DAVID": {
    "id": "DAVID",
    "name": {
      "ko": "다윗",
      "en": "david"
    },
    "title": {
      "ko": "영적 감수성이 풍부한 예술적 창조자",
      "en": "Artistic creator with rich spiritual sensitivity"
    },
    "description": {
      "ko": "고난 속에서도 시를 쓰고 수금을 탔던 다윗처럼, 당신은 풍부한 감수성과 창의성을 바탕으로 세상을 아름답게 해석하는 사람입니다. 규격화된 방식보다 자신의 직관과 감각을 신뢰하며, 하나님과의 깊고 친밀한 교감을 무엇보다 소중히 여깁니다. 유연한 사고방식은 예상치 못한 위기 상황에서 번뜩이는 해결책을 찾아내게 해줍니다. 하지만 감수성이 예민한 만큼 외부 자극에 마음이 쉽게 흔들리거나, 복잡한 갈등 상황에서 회피하려는 경향을 보이기도 합니다. 그럼에도 불구하고 진심 어린 태도로 사람들의 마음을 움직이는 힘은 당신만이 가진 특별한 은사입니다.",
      "en": "Like David, who wrote poetry and played the harp despite suffering, you are a person who beautifully interprets the world based on rich sensitivity and creativity. You trust your own intuition and senses rather than standardized methods, and you value deep and intimate communion with God more than anything else. A flexible mindset allows you to find brilliant solutions in unexpected crisis situations. However, as you are sensitive, you can be easily swayed by external stimuli or show a tendency to avoid complex conflict situations. Nevertheless, the power to move people's hearts with your sincere attitude is a special gift that only you have."
    },
    "traits": {
      "ko": [
        "풍부한 상상력",
        "진실된 공감",
        "유연한 적응력",
        "심미안적 통찰"
      ],
      "en": [
        "rich imagination",
        "true empathy",
        "flexible adaptability",
        "aesthetic insight"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "여호와는 나의 목자시니 내가 부족함이 없으리로다\n(시편 23:1)"
        },
        {
          "version": "rnksv",
          "text": "주님은 나의 목자시니, 내게 부족함 없어라.\n(시편 23:1)"
        },
        {
          "version": "klb",
          "text": "여호와는 나의 목자시니 내게 부족함이 없으리로다.\n(시편 23:1)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "The LORD is my shepherd, I lack nothing.\n(Psalm 23:1)"
        },
        {
          "version": "nlt",
          "text": "The LORD is my shepherd; I have all that I need.\n(Psalm 23:1)"
        },
        {
          "version": "kjv",
          "text": "The LORD is my shepherd; I shall not want.\n(Psalm 23:1)"
        },
        {
          "version": "esv",
          "text": "The LORD is my shepherd; I shall not want.\n(Psalm 23:1)"
        }
      ]
    },
    "imageUrl": "/images/david.png",
    "resultImageUrl": "/images/results/david_result.png",
    "strengths": {
      "ko": [
        "경계를 허무는 창의적 문제해결",
        "진정성 있는 감정 교류와 위로",
        "상황에 구애받지 않는 낙관적 태도"
      ],
      "en": [
        "Creative problem solving that breaks down boundaries",
        "Genuine emotional exchange and comfort",
        "Optimistic attitude regardless of circumstances"
      ]
    },
    "weaknesses": {
      "ko": [
        "반복적인 일상 업무에 대한 지루함",
        "감정 과잉으로 인한 객관성 결여",
        "규율과 규칙에 대한 답답함"
      ],
      "en": [
        "Boredom from repetitive daily tasks",
        "Lack of objectivity due to excessive emotions",
        "Frustration with regulations and rules"
      ]
    },
    "bestMatches": [
      {
        "id": "ESTHER",
        "description": {
          "ko": "깊은 내면의 울림을 가진 두 사람의 만남으로, 다윗의 풍부한 예술적 영감과 에스더의 지혜로운 통찰력이 어우러져 영적으로 가장 수준 높은 교감을 나눕니다.",
          "en": "This is the meeting of two people with deep inner resonance, and David's rich artistic inspiration and Esther's wise insight come together to share the highest level of spiritual connection."
        }
      },
      {
        "id": "PETER",
        "description": {
          "ko": "다윗의 세밀한 공감 능력과 베드로의 솔직한 에너지가 조화를 이루어, 공동체의 경직된 분위기를 깨고 자발적인 기쁨과 헌신을 끌어내는 활력소가 됩니다.",
          "en": "David's detailed ability to empathize and Peter's honest energy combine to become a vital force that breaks the rigid atmosphere of the community and brings out spontaneous joy and devotion."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "PAUL",
        "description": {
          "ko": "자유로운 감성과 예술적 직관을 따르려는 다윗이 성과와 규칙, 효율을 강조하는 바울의 엄격한 체제 속에서 심한 창의적 억압과 피로감을 느낄 수 있습니다.",
          "en": "David, who tries to follow his free sensibility and artistic intuition, can feel severe creative oppression and fatigue under Paul's strict system that emphasizes performance, rules, and efficiency."
        }
      },
      {
        "id": "JOSEPH",
        "description": {
          "ko": "순간의 영감에 따라 유연하게 흐르려는 다윗과 모든 것을 통제된 일정 안에 관리하려는 요셉의 계획성은 일상의 사소한 리듬에서부터 마찰을 빚기 쉽습니다.",
          "en": "David's plan to flow flexibly according to the inspiration of the moment and Joseph's plan to manage everything within a controlled schedule can easily cause friction, starting with the trivial rhythms of daily life."
        }
      }
    ]
  },
  "JOSEPH": {
    "id": "JOSEPH",
    "name": {
      "ko": "요셉",
      "en": "Joseph"
    },
    "title": {
      "ko": "미래를 대비하는 견고한 관리자",
      "en": "A solid manager preparing for the future"
    },
    "description": {
      "ko": "풍년의 시기에 흉년을 대비했던 요셉처럼, 당신은 현실적인 상황을 냉철하게 분석하고 미래를 철저히 준비하는 지혜로운 관리자입니다. 어떤 시련 앞에서도 원망보다 인내를 선택하며, 자신에게 주어진 환경에서 최선을 다해 신뢰를 쌓아갑니다. 당신의 삶은 계산된 우연이 아닌, 정직한 성실함의 결과물입니다. 지나치게 원칙을 고수하거나 현실에 집중하느라 다소 보수적이고 경직되어 보일 수 있지만, 공동체가 위기에 처했을 때 가장 먼저 찾아가 의지하게 되는 든든한 버팀목이 바로 당신입니다.",
      "en": "Like Joseph, who prepared for a bad harvest during a time of plenty, you are a wise manager who cool-headedly analyzes realistic situations and thoroughly prepares for the future. In the face of any trials, we choose patience over resentment and do our best to build trust in the circumstances given to us. Your life is the result of honest sincerity, not calculated coincidence. You may seem a bit conservative and rigid because you stick to principles too much or focus on reality, but you are the first person the community turns to and relies on when it is in crisis."
    },
    "traits": {
      "ko": [
        "철저한 준비성",
        "객관적 상황판단",
        "한결같은 인내",
        "신뢰할 수 있는 실행"
      ],
      "en": [
        "thorough preparation",
        "Objective judgment of the situation",
        "steadfast patience",
        "Reliable Execution"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "당신들은 나를 해하려 하였으나 하나님은 그것을 선으로 바꾸사 오늘과 같이 만민의 생명을 구원하게 하시려 하셨나니\n(창세기 50:20)"
        },
        {
          "version": "rnksv",
          "text": "형님들은 나를 해치려 하였으나, 하나님은 오히려 그것을 선하게 바꾸셔서 오늘날 내가 수많은 사람의 생명을 구원할 수 있게 하셨습니다.\n(창세기 50:20)"
        },
        {
          "version": "klb",
          "text": "당신들은 나를 해치려 하였으나 하나님은 그것을 선으로 바꾸셔서 오늘날 내가 많은 사람들의 생명을 구할 수 있게 하셨습니다.\n(창세기 50:20)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.\n(Genesis 50:20)"
        },
        {
          "version": "nlt",
          "text": "You intended to harm me, but God intended it all for good. He brought me to this position so I could save the lives of many people.\n(Genesis 50:20)"
        },
        {
          "version": "kjv",
          "text": "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive.\n(Genesis 50:20)"
        },
        {
          "version": "esv",
          "text": "As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today.\n(Genesis 50:20)"
        }
      ]
    },
    "imageUrl": "/images/joseph.png",
    "resultImageUrl": "/images/results/joseph_result.png",
    "strengths": {
      "ko": [
        "리스크를 최소화하는 계획 능력",
        "탁월한 자원 관리와 분배력",
        "결과에 책임지는 정직한 리더십"
      ],
      "en": [
        "Planning ability to minimize risk",
        "Excellent resource management and distribution",
        "Honest leadership responsible for results"
      ]
    },
    "weaknesses": {
      "ko": [
        "새로운 변화에 대한 보수적 접근",
        "지나친 진지함으로 인한 경직성",
        "세부 사항에 매몰되는 경향"
      ],
      "en": [
        "Conservative approach to new changes",
        "Rigidity due to excessive seriousness",
        "Tendency to get lost in details"
      ]
    },
    "bestMatches": [
      {
        "id": "PAUL",
        "description": {
          "ko": "요셉의 치밀한 관리 역량이 바울의 원대한 전략을 현실로 정교하게 구현해내어, 공동체의 질서와 성장을 가시적인 성과로 증명해내는 최고의 파트너입니다.",
          "en": "Joseph's meticulous management capabilities precisely translate Paul's grand strategy into reality, making him the best partner who proves the order and growth of the community with visible results."
        }
      },
      {
        "id": "NOAH",
        "description": {
          "ko": "원칙을 사수하는 두 우직한 성품이 만나, 눈에 보이지 않는 기초 공사부터 미래의 결실까지 가장 견고하고 흔들림 없이 쌓아 올리는 신뢰의 관계를 형성합니다.",
          "en": "Two honest personalities who stick to their principles come together to form a relationship of trust that builds the most solid and unwavering foundation from invisible foundation construction to future results."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "ABRAHAM",
        "description": {
          "ko": "검증된 매뉴얼과 명확한 근거를 신뢰하는 요셉에게, 보장되지 않은 가능성만을 보고 일단 거주지를 옮기려는 아브라함의 낙관주의는 무책임한 모험으로 비춰질 수 있습니다.",
          "en": "To Joseph, who trusts proven manuals and clear evidence, Abraham's optimism to change residence after seeing only unguaranteed possibilities may be seen as an irresponsible risk."
        }
      },
      {
        "id": "DAVID",
        "description": {
          "ko": "명확한 데이터와 예측 가능한 시스템을 선호하는 요셉이, 기분과 직관에 따라 수시로 변하는 다윗의 즉흥적인 업무 방식에 깊은 당혹감과 피로를 느낄 수 있습니다.",
          "en": "Joseph, who prefers clear data and predictable systems, may feel deeply embarrassed and tired by David's impromptu work style, which frequently changes depending on his mood and intuition."
        }
      }
    ]
  },
  "ESTHER": {
    "id": "ESTHER",
    "name": {
      "ko": "에스더",
      "en": "esther"
    },
    "title": {
      "ko": "침착한 지혜를 갖춘 담대한 전략가",
      "en": "A bold strategist with calm wisdom"
    },
    "description": {
      "ko": "죽으면 죽으리라는 각오로 민족을 구했던 에스더처럼, 당신은 평소에는 차분하고 신중하지만 결정적인 순간에 놀라운 용기를 발휘하는 외유내강형 전략가입니다. 상황의 흐름을 읽는 통찰력이 뛰어나며, 감정에 휘둘리기보다 인내하며 때를 기다릴 줄 아는 성품을 가졌습니다. 당신의 담대함은 무모함이 아닌, 깊은 신념과 철저한 준비에서 나옵니다. 때로는 지나치게 신중하여 비밀이 많거나 완벽을 기하느라 스스로를 고립시키기도 하지만, 당신의 존재는 공동체가 절체절명의 위기에 처했을 때 가장 강력한 구원의 빛이 됩니다.",
      "en": "Like Esther, who saved her people with the determination to die, you are a strategist who is usually calm and cautious, but shows surprising courage at critical moments. You have excellent insight into the flow of a situation and have the character to be patient and wait for your time rather than being swayed by emotions. Your boldness comes not from recklessness, but from deep conviction and thorough preparation. Sometimes you may be overly cautious and isolate yourself in your need for secrecy or perfection, but your presence becomes the most powerful light of salvation when the community is in desperate danger."
    },
    "traits": {
      "ko": [
        "영리한 통찰력",
        "전략적 인내",
        "신중한 결단",
        "숭고한 사명감"
      ],
      "en": [
        "clever insight",
        "strategic patience",
        "careful decision",
        "noble sense of duty"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "죽으면 죽으리이다\n(에스더 4:16)"
        },
        {
          "version": "rnksv",
          "text": "죽어야 한다면, 죽겠습니다.\n(에스더 4:16)"
        },
        {
          "version": "klb",
          "text": "죽게 되면 죽겠습니다.\n(에스더 4:16)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "If I perish, I perish.\n(Esther 4:16)"
        },
        {
          "version": "nlt",
          "text": "Go and gather together all the Jews of Susa and fast for me. Do not eat or drink for three days, night or day. My maids and I will do the same. And then, though it is against the law, I will go in to see the king. If I must die, I must die.\n(Esther 4:16)"
        },
        {
          "version": "kjv",
          "text": "Go, gather together all the Jews that are present in Shushan, and fast ye for me, and neither eat nor drink three days, night or day: I also and my maidens will fast likewise; and so will I go in unto the king, which is not according to the law: and if I perish, I perish.\n(Esther 4:16)"
        },
        {
          "version": "esv",
          "text": "Go, gather all the Jews to be found in Susa, and hold a fast on my behalf, and do not eat or drink for three days, night or day. I and my young women will also fast as you do. Then I will go to the king, though it is against the law, and if I perish, I perish.\n(Esther 4:16)"
        }
      ]
    },
    "imageUrl": "/images/esther.png",
    "resultImageUrl": "/images/results/esther_result.png",
    "strengths": {
      "ko": [
        "본질을 꿰뚫는 예리한 직관",
        "위기 상황에서의 평정심 유지",
        "목적을 향한 흔들림 없는 인내력"
      ],
      "en": [
        "Keen intuition that penetrates the essence",
        "Maintaining composure in crisis situations",
        "Unwavering perseverance toward a goal"
      ]
    },
    "weaknesses": {
      "ko": [
        "속마음을 잘 드러내지 않는 신비주의",
        "높은 도덕적 잣대로 인한 자기 압박",
        "극심한 긴장감으로 인한 번아웃 위험"
      ],
      "en": [
        "Mysticism that does not reveal one's true feelings",
        "Self-stress due to high moral standards",
        "Risk of burnout due to extreme tension"
      ]
    },
    "bestMatches": [
      {
        "id": "DAVID",
        "description": {
          "ko": "신중함 속에 감춰진 에스더의 뜨거운 사명감이 다윗의 진정성 있는 감성과 만나, 서로의 깊은 고독을 이해하는 최상의 소울메이트가 됩니다.",
          "en": "Esther's passionate sense of duty hidden in prudence meets David's sincere sensibility, and they become the best soulmates who understand each other's deep loneliness."
        }
      },
      {
        "id": "DANIEL",
        "description": {
          "ko": "시대를 읽는 두 영적 거장의 만남으로, 냉철한 직관과 담대한 전략이 결합하여 거대한 위협 앞에서도 민족의 활로를 찾아냅니다.",
          "en": "The meeting of two spiritual masters who read the times combines cool-headed intuition and bold strategy to find a way forward for the nation even in the face of a huge threat."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "PETER",
        "description": {
          "ko": "조용히 본질을 꿰뚫으며 때를 기다리는 절제된 태도에게 가감 없이 쏟아내는 직설적인 감정 표현은 다소 성급하고 소란스럽게 느껴집니다.",
          "en": "With a restrained attitude of quietly penetrating the essence and waiting for the right moment, the direct expression of emotions without any hesitation feels somewhat hasty and noisy."
        }
      },
      {
        "id": "GIDEON",
        "description": {
          "ko": "통찰과 직관을 통한 결단을 중시하는 스타일이, 모든 단계마다 증거를 요구하며 의구심을 표하는 분석적인 태도에 답답함을 느낄 수 있습니다.",
          "en": "A style that emphasizes decision-making through insight and intuition may feel frustrated by an analytical attitude that demands evidence and expresses doubt at every step."
        }
      }
    ]
  },
  "MOSES": {
    "id": "MOSES",
    "name": {
      "ko": "모세",
      "en": "Moses"
    },
    "title": {
      "ko": "사명을 어깨에 짊어진 고독한 지도자",
      "en": "A lone leader carrying a mission on his shoulders"
    },
    "description": {
      "ko": "수많은 백성을 이끌고 광야를 지났던 모세처럼, 당신은 원대한 비전과 타인을 향한 깊은 책임감을 가진 진중한 리더입니다. 자신의 부족함을 누구보다 잘 알기에 겸손하며, 그만큼 하나님을 온전히 의지하려 노력합니다. 거시적인 안목으로 공동체가 나아가야 할 방향을 제시하는 능력이 탁월하지만, 때로는 리더로서 느끼는 압박감이 너무 커서 고립감을 느끼거나 자기 불신에 빠지기도 합니다. 하지만 당신의 인내와 온유함은 수만 명의 사람을 하나로 묶어 약속의 땅으로 인도하는 가장 강력한 리더십의 원천이 됩니다.",
      "en": "Like Moses, who led countless people through the wilderness, you are a serious leader with a grand vision and a deep sense of responsibility toward others. I am humble because I know my shortcomings better than anyone else, and I try to rely completely on God. Although the ability to suggest the direction the community should take from a macroscopic perspective is excellent, sometimes the pressure felt as a leader is so great that one feels isolated or falls into self-distrust. But your patience and gentleness are your most powerful source of leadership, uniting tens of thousands of people and leading them to the promised land."
    },
    "traits": {
      "ko": [
        "거시적 통찰력",
        "온유한 리더십",
        "강한 책임의식",
        "사명 중심적"
      ],
      "en": [
        "macro insight",
        "gentle leadership",
        "strong sense of responsibility",
        "mission-driven"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "이제 가라 내가 네 입과 함께 있어서 할 말을 가르치리라\n(출애굽기 4:12)"
        },
        {
          "version": "rnksv",
          "text": "그러니 이제 가거라. 네가 말하는 것을 내가 돕겠다. 네가 할 말을 가르쳐 주겠다.\n(출애굽기 4:12)"
        },
        {
          "version": "klb",
          "text": "자, 이제 가거라. 내가 네 입과 함께하여 네가 할 말을 가르쳐 주겠다.\n(출애굽기 4:12)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "Now go; I will help you speak and will teach you what to say.\n(Exodus 4:12)"
        },
        {
          "version": "nlt",
          "text": "Now go! I will be with you as you speak, and I will instruct you in what to say.\n(Exodus 4:12)"
        },
        {
          "version": "kjv",
          "text": "Now therefore go, and I will be with thy mouth, and teach thee what thou shalt say.\n(Exodus 4:12)"
        },
        {
          "version": "esv",
          "text": "Now therefore go, and I will be with your mouth and teach you what you shall speak.\n(Exodus 4:12)"
        }
      ]
    },
    "imageUrl": "/images/moses.png",
    "resultImageUrl": "/images/results/moses_result.png",
    "strengths": {
      "ko": [
        "장기적인 목표를 향한 인내심",
        "자신을 낮추고 공동체를 높이는 태도",
        "통합적인 관점에서의 갈등 조율"
      ],
      "en": [
        "Perseverance toward long-term goals",
        "An attitude that humbles oneself and elevates the community",
        "Conflict coordination from an integrated perspective"
      ]
    },
    "weaknesses": {
      "ko": [
        "지나친 책임감으로 인한 심리적 중압감",
        "스스로의 역량에 대한 과도한 의구심",
        "완벽하게 준비되지 않았을 때의 주저함"
      ],
      "en": [
        "Psychological pressure due to excessive responsibility",
        "Excessive doubts about one's own abilities",
        "Hesitation when not fully prepared"
      ]
    },
    "bestMatches": [
      {
        "id": "RUTH",
        "description": {
          "ko": "거대한 사명의 무게를 짊어진 고독한 리더의 어깨를 룻의 변치 않는 신의와 성실함이 묵묵히 받쳐주며, 가장 정서적으로 안정된 안식처가 되어줍니다.",
          "en": "Ruth's unchanging faith and sincerity silently support the shoulders of the lone leader carrying the weight of a huge mission, and become the most emotionally stable haven."
        }
      },
      {
        "id": "MARY",
        "description": {
          "ko": "모세가 제시하는 거시적인 방향성에 마리아의 세밀한 보살핌이 더해져, 공동체의 머리부터 발끝까지 소외됨 없는 완벽한 케어와 화합이 완성됩니다.",
          "en": "Mary's detailed care is added to the macroscopic direction suggested by Moses, and perfect care and harmony without alienation of the community from head to toe are completed."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "PETER",
        "description": {
          "ko": "수만 명의 대열을 유지하며 신중하게 전진해야 하는 지도자에게, 돌발적으로 튀어나가는 베드로의 즉흥성은 사역의 일관성을 흔드는 위험 요소로 작용할 수 있습니다.",
          "en": "For a leader who must move forward carefully while maintaining a line of tens of thousands of people, Peter's spontaneous outbursts can act as a risk factor that shakes the consistency of ministry."
        }
      },
      {
        "id": "ABRAHAM",
        "description": {
          "ko": "모든 가능성을 검토하고 신중하게 발을 떼는 모세와, 보지 않고도 일단 길을 떠나보는 낙관적 개척가는 의사결정의 온도 차가 커 합의에 도달하기 어렵습니다.",
          "en": "It is difficult to reach an agreement between Moses, who examines all possibilities and takes careful steps, and the optimistic pioneer who sets out on his own path without even looking at the difference in decision-making temperature."
        }
      }
    ]
  },
  "RUTH": {
    "id": "RUTH",
    "name": {
      "ko": "룻",
      "en": "ruth"
    },
    "title": {
      "ko": "변치 않는 사랑과 신의의 순종자",
      "en": "Obedient of unchanging love and faithfulness"
    },
    "description": {
      "ko": "낯선 땅과 불투명한 미래 앞에서도 '어머니의 하나님이 나의 하나님'이라 고백했던 룻처럼, 당신은 정직한 성실함과 깊은 신의를 가진 사람입니다. 화려하게 자신을 드러내기보다 소중한 가치를 위해 묵묵히 헌신할 때 가장 빛이 납니다. 당신의 사랑은 감상적인 감정을 넘어 타인의 아픔에 실질적으로 동참하는 행동으로 나타납니다. 변화보다 안정을 선호하며 가끔은 자신의 의견을 표현하는 데 수줍어할지 모르지만, 당신이 보여주는 한결같은 모습은 주변 사람들에게 세상에서 가장 안전하고 따뜻한 회복감을 선사합니다.",
      "en": "Like Ruth, who confessed that ‘my mother’s God is my God’ even in the face of an unfamiliar land and an uncertain future, you are a person with honest sincerity and deep trust. You shine the brightest when you quietly dedicate yourself to your precious values ​​rather than showing off yourself flashily. Your love goes beyond sentimental feelings and is expressed through actual acts of participation in the pain of others. You prefer stability over change and may sometimes be shy about expressing your opinions, but the consistency you show gives those around you the safest, warmest, most restorative feeling in the world."
    },
    "traits": {
      "ko": [
        "한결같은 성실성",
        "깊은 정서적 공감",
        "강인한 생활력",
        "헌신적 의리"
      ],
      "en": [
        "consistent sincerity",
        "deep emotional empathy",
        "strong vitality",
        "devoted loyalty"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "어머니의 백성이 나의 백성이 되고 어머니의 하나님이 나의 하나님이 되시리니\n(룻기 1:16)"
        },
        {
          "version": "rnksv",
          "text": "어머님의 겨레가 내 겨레요, 어머님의 하나님이 내 하나님입니다.\n(룻기 1:16)"
        },
        {
          "version": "klb",
          "text": "어머니의 나라가 내 나라가 되고 어머니의 하나님이 내 하나님이 되실 것입니다.\n(룻기 1:16)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "But Ruth replied, “Don’t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.”\n(Ruth 1:16)"
        },
        {
          "version": "nlt",
          "text": "But Ruth replied, “Don’t ask me to leave you and turn back. Wherever you go, I will go; wherever you live, I will live. Your people will be my people, and your God will be my God.”\n(Ruth 1:16)"
        },
        {
          "version": "kjv",
          "text": "And Ruth said, Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God:\n(Ruth 1:16)"
        },
        {
          "version": "esv",
          "text": "But Ruth said, “Do not urge me to leave you or to return from following you. For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.”\n(Ruth 1:16)"
        }
      ]
    },
    "imageUrl": "/images/ruth.png",
    "resultImageUrl": "/images/results/ruth_result.png",
    "strengths": {
      "ko": [
        "시련 속에서도 잃지 않는 긍정적 태도",
        "한결같은 태도로 쌓아온 깊은 신뢰 관계",
        "현실의 어려움을 이겨내는 회복 탄력성"
      ],
      "en": [
        "A positive attitude that does not lose even in trials",
        "A deep trust relationship built through a consistent attitude",
        "Resilience to overcome real-life difficulties"
      ]
    },
    "weaknesses": {
      "ko": [
        "자신보다 타인의 편의를 우선하는 태도",
        "결정적인 순간의 단호함 부족",
        "새로운 도전에 대한 심리적 거부감"
      ],
      "en": [
        "Attitude of prioritizing the convenience of others over one's own",
        "Lack of decisiveness at critical moments",
        "Psychological resistance to new challenges"
      ]
    },
    "bestMatches": [
      {
        "id": "MOSES",
        "description": {
          "ko": "위대한 사명을 가진 리더를 조용하지만 굳건하게 지탱해주는 룻의 헌신은, 공동체의 비전이 흔들리지 않고 뿌리 내리게 하는 가장 큰 동력이 됩니다.",
          "en": "Ruth's dedication, quietly but firmly supporting a leader with a great mission, becomes the greatest driving force that allows the community's vision to take root without wavering."
        }
      },
      {
        "id": "MARY",
        "description": {
          "ko": "서로의 말 없는 수고와 섬세한 노력을 누구보다 잘 이해하기에, 특별한 대화 없이도 깊은 유대감과 평안을 공유하는 최상의 정서적 동역 파트너입니다.",
          "en": "Because they understand each other's silent and delicate efforts better than anyone else, they are the best emotional partners who share a deep bond and peace without any special conversation."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "PAUL",
        "description": {
          "ko": "따뜻한 관계성과 신의를 삶의 최우선 가치로 여기는 룻에게, 오직 성과와 목표 완수를 위해 드라이브를 거는 바울의 태도는 다소 냉정하고 인간미 없게 느껴질 수 있습니다.",
          "en": "To Ruth, who considers warm relationships and faithfulness to be the top values ​​in life, Paul's attitude of driving only for results and goal completion may feel somewhat cold and impersonal."
        }
      },
      {
        "id": "ABRAHAM",
        "description": {
          "ko": "한 자리를 묵묵히 지키며 인내로 결실을 보려는 룻과, 끊임없이 거주지를 옮기며 새로운 도전을 즐기는 아브라함은 삶의 속도와 지향점에서 근본적인 차이에 직면합니다.",
          "en": "Ruth, who quietly stays in one place and tries to see results through patience, and Abraham, who constantly moves residence and enjoys new challenges, face fundamental differences in the pace and direction of their lives."
        }
      }
    ]
  },
  "DANIEL": {
    "id": "DANIEL",
    "name": {
      "ko": "다니엘",
      "en": "Daniel"
    },
    "title": {
      "ko": "품격 있는 지혜를 갖춘 흔들리지 않는 조언자",
      "en": "An unwavering advisor with refined wisdom."
    },
    "description": {
      "ko": "사자 굴 앞에서도 예루살렘을 향해 창을 열고 기도했던 다니엘처럼, 당신은 명철한 지혜와 확고한 자기 정체성을 가진 사람입니다. 감정에 휩쓸리기보다 팩트와 논리, 그리고 영적인 원칙에 입각하여 상황을 판단하며, 장기적인 안목으로 시대를 통찰하는 힘이 있습니다. 당신의 언행은 정결하며 절제되어 있어 주변의 존경을 한 몸에 받습니다. 때로는 원칙을 사수하느라 개인주의적이거나 냉소적으로 비치기도 하지만, 당신의 명확한 가이드라인은 혼란스러운 공동체가 길을 잃지 않게 하는 가장 정교한 나침반이 됩니다.",
      "en": "Like Daniel, who opened the window toward Jerusalem and prayed in front of the lion's den, you are a person with clear wisdom and a firm sense of self-identity. Rather than being swayed by emotions, we judge situations based on facts, logic, and spiritual principles, and have the power to insight into the times with a long-term perspective. Your words and actions are pure and disciplined, earning you the respect of those around you. At times, you may appear individualistic or cynical in your adherence to principles, but your clear guidelines become the most precise compass that prevents a chaotic community from losing its way."
    },
    "traits": {
      "ko": [
        "명철한 분석력",
        "확고한 가치관",
        "냉철한 이성",
        "미래적 통찰"
      ],
      "en": [
        "Clear analytical skills",
        "firm values",
        "cool-headed reason",
        "future insight"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "다니엘은 마음이 민첩하여 총독들과 방백들 위에 뛰어나므로\n(다니엘 6:3)"
        },
        {
          "version": "rnksv",
          "text": "다니엘이 다른 총리들이나 지방 장관들보다 더 우수하였으므로\n(다니엘 6:3)"
        },
        {
          "version": "klb",
          "text": "다니엘은 아주 총명하여 다른 모든 총리들과 지휘관들보다 훨씬 뛰어났으므로\n(다니엘 6:3)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "Now Daniel so distinguished himself among the administrators and the satraps by his exceptional qualities that the king planned to set him over the whole kingdom.\n(Daniel 6:3)"
        },
        {
          "version": "nlt",
          "text": "Daniel soon proved himself more capable than all the other administrators and high officers. Because of his great ability, the king made plans to place him over the entire empire.\n(Daniel 6:3)"
        },
        {
          "version": "kjv",
          "text": "Then this Daniel was preferred above the presidents and princes, because an excellent spirit was in him; and the king thought to set him over the whole realm.\n(Daniel 6:3)"
        },
        {
          "version": "esv",
          "text": "Then this Daniel became distinguished above all the other high officials and satraps, because an excellent spirit was in him. And the king planned to set him over the whole kingdom.\n(Daniel 6:3)"
        }
      ]
    },
    "imageUrl": "/images/daniel.png",
    "resultImageUrl": "/images/results/daniel_result.png",
    "strengths": {
      "ko": [
        "복잡한 문제를 단순화하는 논리적 명쾌함",
        "압박 상황에서도 흐트러지지 않는 평정심",
        "자신의 정체성을 지키는 일관성"
      ],
      "en": [
        "Logical clarity that simplifies complex problems",
        "Unwavering composure even in pressure situations",
        "Consistency in protecting one's identity"
      ]
    },
    "weaknesses": {
      "ko": [
        "논리적으로 이해되지 않는 상황에 대한 낮은 수용력",
        "감정적인 공감이나 표현의 부족",
        "철저한 개인적 기준에 의한 타인 평가"
      ],
      "en": [
        "Low tolerance for situations that do not make logical sense",
        "Lack of emotional empathy or expression",
        "Evaluating others based on strict personal standards"
      ]
    },
    "bestMatches": [
      {
        "id": "ESTHER",
        "description": {
          "ko": "다니엘의 명철한 분석력과 에스더의 예리한 통찰력이 결합하여, 감정에 치우치지 않고 시대의 본질적 흐름을 정확히 읽어내어 완벽한 해답을 도출하는 지성적 시너지를 냅니다.",
          "en": "The combination of Daniel's clear analytical skills and Esther's keen insight creates an intellectual synergy that accurately reads the essential trends of the times without being biased by emotions and comes up with a perfect answer."
        }
      },
      {
        "id": "ABRAHAM",
        "description": {
          "ko": "다니엘의 장기적인 안목이 아브라함의 거침없는 실행력과 만나, 막연한 비전이 아닌 구체적이고 실현 가능한 미래의 축복을 향한 확실한 로드맵으로 완성됩니다.",
          "en": "Daniel's long-term perspective meets Abraham's unstoppable execution ability, and the result is not a vague vision, but a concrete and feasible roadmap toward future blessings."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "PETER",
        "description": {
          "ko": "철저한 팩트와 논리적 타당성을 중시하는 다니엘에게, 명확한 근거 없이 열정과 의지만 앞세워 돌진하는 베드로의 방식은 설득력을 얻기 어렵고 비효율적으로 보일 수 있습니다.",
          "en": "To Daniel, who values ​​thorough facts and logical validity, Peter's method of rushing forward with passion and will without a clear basis may seem inefficient and difficult to persuade."
        }
      },
      {
        "id": "MARY",
        "description": {
          "ko": "변화와 개척을 통해 시대를 리드하려는 다니엘의 혁신적 성향이, 주어진 환경을 현상 그대로 유지하고 보존하려는 마리아의 보수적인 태도와 소통의 한계를 경험할 수 있습니다.",
          "en": "You can experience Daniel's innovative tendency to lead the times through change and pioneering, and Maria's conservative attitude and communication limitations to maintain and preserve the given environment as is."
        }
      }
    ]
  },
  "NOAH": {
    "id": "NOAH",
    "name": {
      "ko": "노아",
      "en": "Noah"
    },
    "title": {
      "ko": "성실함으로 방주를 세우는 우직한 신앙인",
      "en": "An honest believer who builds an ark with sincerity"
    },
    "description": {
      "ko": "맑은 날씨에도 묵묵히 산 위에 배를 지었던 노아처럼, 당신은 인내와 성실함의 결정체입니다. 남들의 수군거림이나 일시적인 유행에 흔들리지 않고, 자신에게 주어진 소명을 한 걸음씩 완수해가는 뚝심이 있습니다. 당신의 신앙은 화려한 고백보다 삶에서 실천하는 정직한 노동과 기다림으로 증명됩니다. 원칙을 중시하고 보수적인 면이 있어 갑작스러운 태세 전환이나 가벼운 말들을 경계하지만, 당신과 같은 사람이 있기에 공동체는 거대한 세상의 풍파 속에서도 침몰하지 않고 견고하게 유지될 수 있습니다.",
      "en": "Like Noah, who quietly built a boat on a mountain even in clear weather, you are the epitome of patience and sincerity. You have the tenacity to fulfill your calling step by step, without being swayed by the whispers of others or temporary trends. Your faith is proven through honest work and waiting in your life rather than through flashy confessions. You value principles and have a conservative side, so you are wary of sudden changes in attitude or light remarks. However, because of people like you, the community can remain strong and will not sink even in the great storms of the world."
    },
    "traits": {
      "ko": [
        "우직한 인내심",
        "원칙 중심의 행동",
        "높은 성실성",
        "구조적 사고"
      ],
      "en": [
        "honest patience",
        "principle-based action",
        "high integrity",
        "structural thinking"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "노아가 그와 같이 하여 하나님이 자기에게 명하신 대로 다 준행하였더라\n(창세기 6:22)"
        },
        {
          "version": "rnksv",
          "text": "노아는 하나님이 명하신 대로 다 하였다.\n(창세기 6:22)"
        },
        {
          "version": "klb",
          "text": "노아는 하나님이 명령하신 대로 다 수행하였다.\n(창세기 6:22)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "Noah did everything just as God commanded him.\n(Genesis 6:22)"
        },
        {
          "version": "nlt",
          "text": "So Noah did everything exactly as God had commanded him.\n(Genesis 6:22)"
        },
        {
          "version": "kjv",
          "text": "Thus did Noah; according to all that God commanded him, so did he.\n(Genesis 6:22)"
        },
        {
          "version": "esv",
          "text": "Noah did this; he did all that God commanded him.\n(Genesis 6:22)"
        }
      ]
    },
    "imageUrl": "/images/noah.png",
    "resultImageUrl": "/images/results/noah_result.png",
    "strengths": {
      "ko": [
        "목표를 향한 지치지 않는 실행력",
        "규칙과 질서를 선호하는 정교한 관리력",
        "변치 않는 신뢰감을 주는 일관된 성품"
      ],
      "en": [
        "Tireless execution ability toward the goal",
        "Sophisticated management with a preference for rules and order",
        "Consistent character that gives unchanging trust"
      ]
    },
    "weaknesses": {
      "ko": [
        "새로운 시도에 대한 과도한 경계심",
        "과정의 정당성을 강조하며 생길 수 있는 답답함",
        "자신의 방식을 타인에게 강요할 위험"
      ],
      "en": [
        "Excessive wariness about trying new things",
        "The frustration that can arise from emphasizing the legitimacy of the process",
        "The risk of imposing one's way on others"
      ]
    },
    "bestMatches": [
      {
        "id": "JOSEPH",
        "description": {
          "ko": "원칙을 사수하는 노아의 우직함과 미래 리스크를 관리하는 요셉의 정교함이 조화를 이루어, 어떠한 대재난 앞에서도 결코 무너지지 않는 공동체의 안전 지지대를 구축합니다.",
          "en": "Noah's honesty in upholding principles and Joseph's sophistication in managing future risks are harmonized to build a safety support for the community that will never collapse in the face of any major disaster."
        }
      },
      {
        "id": "RUTH",
        "description": {
          "ko": "각자의 자리에서 묵묵히 소명에 집중하는 두 사람의 신실함은, 특별한 설명 없이도 서로의 수고와 진심을 신뢰하며 가장 안정적인 영적 동행을 가능케 합니다.",
          "en": "The faithfulness of two people who quietly focus on their callings in their respective positions allows for the most stable spiritual companionship, trusting in each other's hard work and sincerity without any special explanation."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "ABRAHAM",
        "description": {
          "ko": "주어진 위치에서 완성을 향해가는 정적인 인내를 가진 노아에게, 정착하지 않고 끊임없이 이동하며 영역을 확장하려는 아브라함의 동적인 스타일은 근본적인 가치 충돌을 야기합니다.",
          "en": "For Noah, who has a static perseverance toward completion in a given position, Abraham's dynamic style of constantly moving and expanding his territory rather than settling down causes a fundamental conflict of values."
        }
      },
      {
        "id": "PETER",
        "description": {
          "ko": "설계도대로 차근차근 시간과 공을 들여 벽돌을 쌓아야 하는 장기 프로젝트에서, 속도감과 재미를 위해 과정을 생략하거나 도약하려는 베드로의 태도는 노아에게 큰 불안과 불신을 줍니다.",
          "en": "In a long-term project that requires time and effort to build bricks step by step according to the blueprint, Peter's attitude of skipping steps or leaping forward for the sake of speed and fun causes great anxiety and distrust in Noah."
        }
      }
    ]
  },
  "ABRAHAM": {
    "id": "ABRAHAM",
    "name": {
      "ko": "아브라함",
      "en": "Abraham"
    },
    "title": {
      "ko": "미지의 길을 여는 낙관적인 개척자",
      "en": "An optimistic pioneer opening an unknown path"
    },
    "description": {
      "ko": "갈 바를 알지 못하고 떠났던 아브라함처럼, 당신은 새로운 영역을 탐험하고 도전하는 데서 에너지를 얻는 모험가이자 개척자입니다. 현실에 안주하기보다 항상 더 나은 가치와 미래의 가능성을 꿈꾸며, 사람들을 넉넉히 품는 환대의 리더십을 가지고 있습니다. 환경이 변해도 금새 적응하는 유연함과 강한 회복 탄력성은 당신을 무너지지 않게 만듭니다. 때로는 지나치게 낙관적이어서 현실적인 세부 사항을 놓치거나 결정을 유보하는 경향이 있지만, 당신의 거침없는 발걸음은 공동체에게 새로운 약속의 땅을 열어주는 희망의 전람차가 됩니다.",
      "en": "Like Abraham, who left without knowing where he was going, you are an adventurer and a pioneer who gets energy from exploring and challenging new territories. Rather than being complacent, we always dream of better values ​​and future possibilities, and have a leadership of hospitality that generously embraces people. Flexibility and strong resilience to quickly adapt even when the environment changes prevent you from collapsing. Although you may be overly optimistic at times and tend to miss realistic details or hold off on making decisions, your unstoppable steps become a tramway of hope that opens up new promised lands for your community."
    },
    "traits": {
      "ko": [
        "도전적 개척정신",
        "포용력 있는 환대",
        "낙관적 비전",
        "유연한 적응력"
      ],
      "en": [
        "Challenging pioneering spirit",
        "inclusive hospitality",
        "optimistic vision",
        "flexible adaptability"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "내가 너로 큰 민족을 이루고 네게 복을 주어 네 이름을 창대케 하리니 너는 복의 근원이 될찌라\n(창세기 12:2)"
        },
        {
          "version": "rnksv",
          "text": "내가 너를 큰 민족이 되게 하고, 너에게 복을 주어서, 네 이름을 떨치게 하겠다. 너는 복의 근원이 될 것이다.\n(창세기 12:2)"
        },
        {
          "version": "klb",
          "text": "내가 너를 큰 민족의 조상이 되게 하고 너에게 복을 주어 네 이름을 떨치게 하겠다. 너는 다른 사람들에게 복을 끼치는 자가 될 것이다.\n(창세기 12:2)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.\n(Genesis 12:2)"
        },
        {
          "version": "nlt",
          "text": "I will make you into a great nation. I will bless you and make you famous, and you will be a blessing to others.\n(Genesis 12:2)"
        },
        {
          "version": "kjv",
          "text": "And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing:\n(Genesis 12:2)"
        },
        {
          "version": "esv",
          "text": "And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing.\n(Genesis 12:2)"
        }
      ]
    },
    "imageUrl": "/images/abraham.png",
    "resultImageUrl": "/images/results/abraham_result.png",
    "strengths": {
      "ko": [
        "리스크를 두려워하지 않는 용기",
        "타인을 내 편으로 만드는 따뜻한 수용력",
        "거시적인 안목에서의 비전 제시"
      ],
      "en": [
        "Courage not to be afraid of risk",
        "Warm acceptance that brings others to your side",
        "Presenting a vision from a macroscopic perspective"
      ]
    },
    "weaknesses": {
      "ko": [
        "현실적인 문제와 디테일에 대한 방조",
        "인간적인 정에 이끌린 우유부단함",
        "정리되지 않은 상황에서의 주의 산만"
      ],
      "en": [
        "Attention to realistic problems and details",
        "Indecisiveness driven by human affection",
        "Distraction in disorganized situations"
      ]
    },
    "bestMatches": [
      {
        "id": "DANIEL",
        "description": {
          "ko": "아브라함의 무모해 보이는 비전에 다니엘의 정치(精緻)한 분석 시각이 날개를 달아주어, 막연한 시도가 확실한 성공으로 변모합니다.",
          "en": "Daniel's political and analytical perspective gives wings to Abraham's seemingly reckless vision, transforming a vague attempt into a definite success."
        }
      },
      {
        "id": "PAUL",
        "description": {
          "ko": "미지의 땅을 향한 개척 본능이 바울의 압도적인 전략적 추진력을 만났을 때, 상상할 수 없었던 광대한 영역으로 복음의 지경이 확장됩니다.",
          "en": "When the pioneering instinct for unknown lands meets Paul's overwhelming strategic drive, the scope of the gospel expands into vast areas that could not have been imagined."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "NOAH",
        "description": {
          "ko": "경계를 허물고 이동하며 가능성을 찾으려는 모험가에게, 한 자리에 수십 년간 머물며 성벽을 쌓는 방식은 정체되고 답답하게 느껴질 수 있습니다.",
          "en": "For adventurers who want to break down boundaries, move around, and discover possibilities, staying in one place for decades and building walls can feel stagnant and frustrating."
        }
      },
      {
        "id": "GIDEON",
        "description": {
          "ko": "낙관하며 일단 떠나보려는 발걸음에 사사건건 의심하며 표징을 구하는 신중함은 진행의 활력을 꺾는 방해 요소로 작용하기 쉽습니다.",
          "en": "Cautiousness, doubting everything and seeking signs while trying to leave with optimism can easily act as a hindrance that dampens the vitality of progress."
        }
      }
    ]
  },
  "GIDEON": {
    "id": "GIDEON",
    "name": {
      "ko": "기드온",
      "en": "Gideon"
    },
    "title": {
      "ko": "객관적 검증을 중시하는 신중한 기획자",
      "en": "A careful planner who values ​​objective verification"
    },
    "description": {
      "ko": "양털의 이슬을 통해 하나님의 뜻을 거듭 확인했던 기드온처럼, 당신은 매우 분석적이고 신중한 태도로 삶을 대하는 지략가 스타일입니다. 단순히 열정에 이끌리기보다 명확한 근거와 확신이 있을 때 비로소 몸을 움직이며, 일단 시작하면 누구보다 효율적인 방법으로 결과를 도출해냅니다. 자신을 과시하지 않는 겸손한 태도는 주변을 편안하게 하지만, 스스로에 대한 엄격한 잣대와 조심스러움 때문에 기회를 놓치거나 행동이 지연되기도 합니다. 그러나 확신 위에 선 당신의 지전략은 공동체를 가장 안전하고 확실한 승리의 길로 인도합니다.",
      "en": "Like Gideon, who repeatedly confirmed God's will through the dew on his wool, you are a strategist who approaches life with a very analytical and cautious attitude. Rather than simply being driven by passion, we move our bodies only when we have clear evidence and confidence, and once we start, we produce results in a more efficient way than anyone else. A humble attitude that does not show off oneself makes those around you feel comfortable, but due to strict standards and caution towards yourself, you may miss opportunities or delay action. However, your strategic strategy, based on confidence, will lead the community to the safest and surest path to victory."
    },
    "traits": {
      "ko": [
        "데이터 중심 분석",
        "효율적 문제해결",
        "신중한 지목전략",
        "검증된 확신"
      ],
      "en": [
        "Data-driven analytics",
        "Efficient problem solving",
        "careful selection strategy",
        "proven confidence"
      ]
    },
    "verse": {
      "ko": [
        {
          "version": "krv",
          "text": "여호와께서 그에게 이르시되 너는 이 네 힘을 의지하고 가서 이스라엘을 미디안의 손에서 구원하라 내가 너를 보낸 것이 아니냐\n(사사기 6:14)"
        },
        {
          "version": "rnksv",
          "text": "주님께서 그를 바라보시며 말씀하셨다. '너에게 있는 그 힘을 가지고 가서, 이스라엘을 미디안의 손에서 구해 내어라. 내가 직접 너를 보낸다.'\n(사사기 6:14)"
        },
        {
          "version": "klb",
          "text": "그러자 여호와께서는 그를 돌아보시며 '너는 가서 네가 가진 그 힘으로 이스라엘을 미디안 사람들의 손에서 구출하라. 내가 너를 보내지 않느냐?' 하고 말씀하셨다.\n(사사기 6:14)"
        }
      ],
      "en": [
        {
          "version": "niv",
          "text": "The LORD turned to him and said, “Go in the strength you have and save Israel out of Midian’s hand. Am I not sending you?”\n(Judges 6:14)"
        },
        {
          "version": "nlt",
          "text": "Then the LORD turned to him and said, “Go with the strength you have, and rescue Israel from the Midianites. I am sending you!”\n(Judges 6:14)"
        },
        {
          "version": "kjv",
          "text": "And the LORD looked upon him, and said, Go in this thy might, and thou shalt save Israel from the hand of the Midianites: have not I sent thee?\n(Judges 6:14)"
        },
        {
          "version": "esv",
          "text": "And the LORD turned to him and said, “Go in this might of yours and save Israel from the hand of Midian; do not I send you?”\n(Judges 6:14)"
        }
      ]
    },
    "imageUrl": "/images/gideon.png",
    "resultImageUrl": "/images/results/gideon_result.png",
    "strengths": {
      "ko": [
        "빈틈없는 논리와 효율성 추구",
        "객관적 데이터를 통한 리스크 관리",
        "소수의 자원을 최대화하는 전략적 사고"
      ],
      "en": [
        "Pursuing flawless logic and efficiency",
        "Risk management through objective data",
        "Strategic thinking to maximize few resources"
      ]
    },
    "weaknesses": {
      "ko": [
        "지나친 의구심으로 인한 실행 지체",
        "전체보다 부분의 논리에 집착하는 경향",
        "지나치게 비판적인 자기 평가"
      ],
      "en": [
        "Delay in execution due to excessive doubts",
        "Tendency to focus on the logic of parts rather than the whole",
        "overly critical self-evaluation"
      ]
    },
    "bestMatches": [
      {
        "id": "PAUL",
        "description": {
          "ko": "기드온의 철저한 검증 능력과 바울의 강력한 전략적 추진력이 시너지를 내어, 가장 빈틈없고 논리적인 승리의 방정식을 만들어가는 최강의 전략 사령부가 됩니다.",
          "en": "Gideon's thorough verification ability and Paul's strong strategic driving force create synergy, uniting to form an unstoppable strategic partnership focused on ensuring clear victories."
        }
      },
      {
        "id": "DANIEL",
        "description": {
          "ko": "지능이 뛰어난 두 분석가의 만남으로, 어떤 혼란스러운 위기 속에서도 팩트를 기반으로 한 가장 정교하고 명쾌한 공동체의 생존 해법을 도출해냅니다.",
          "en": "A partnership between two brilliant analysts, resulting in highly sophisticated, fact-based solutions for overcoming any crisis."
        }
      }
    ],
    "worstMatches": [
      {
        "id": "PETER",
        "description": {
          "ko": "객관적인 검증과 확실한 징조를 확인한 후에야 움직이려는 신중함에게, 일단 부딪히고 보는 베드로의 돌격형 스타일은 사역의 안정성을 해치는 가장 불안한 파트너로 비춰질 수 있습니다.",
          "en": "Peter's bold and charging style might feel too unpredictable or risky for those who prefer objective planning and verification."
        }
      },
      {
        "id": "DAVID",
        "description": {
          "ko": "모든 것을 데이터와 증거로만 필터링하려는 기드온의 분석적 성향이, 예술적 감수성과 영성에 전적으로 입각한 다윗의 유연한 소통 방식과는 사역적 접점을 찾기 매우 어렵습니다.",
          "en": "It can be challenging to balance Gideon's highly analytical, data-driven approach with David's deeply emotional and artistic approach to ministry."
        }
      }
    ]
  }
};
