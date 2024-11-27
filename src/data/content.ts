import { Content } from '@/types';

export const contentData: Content[] = [
    {
        title: 'Work Experience',
        items: [
            {
                title: '<span class="text-lg mt-2 bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text font-bold text-transparent">LG CNS</span>',
                subTitle: 'AI / Backend 개발자',
                date: '2023.11 - Now',
                description:
                    '<span class="text-sm mt-1">1. LG Exaone 모델(v1, v2, v3, v3.5, ~) 추론 최적화 및 vLLM(custom, 오픈 소스 기여), sglang(custom, 오픈 소스 기여)에 적용 및 실제 서비스에 적용</span><br>' +
                    '<span class="text-sm mt-1">2. LG LLaVA 모델 추론 최적화 및 vLLM에 적용 및 실제 서비스에 적용</span><br>' +
                    '<span class="text-sm mt-1">3. Google Cloud Platform Controller API 서버 개발 및 사내 서비스에 적용</span><br>' +
                    '<span class="text-xs mt-2"># 팀내 study / 신기술 도입 주도</span><br><span class="text-xs mt-1"># 팀내 분위기 메이커</span>',
            },
            {
                title: '<span class="text-lg mt-2 bg-gradient-to-r from-blue-400 to-fuchsia-600 bg-clip-text font-bold text-transparent">컴투버스</span>',
                subTitle: 'AI / Web 개발자',
                date: '2022.06 - 2023.10',
                description:
                    '<span class="text-sm mt-1">1. Human Matting Algorithm 개발 및 실제 환경(유니티)에 적용</span><br>' +
                    '<span class="text-sm mt-1">2. Face Landmark for Avatar Algorithm 개발 및 실제 환경(유니티)에 적용</span><br>' +
                    '<span class="text-sm mt-1">3. Voice Activity Detection/ Voice Denoiser 개발 및 실제 환경(유니티)에 적용</span><br>' +
                    `<span class="text-sm mt-1">4. Front End 신기술 조사 / Next.js(app 기반) 도입</span><br>` +
                    '<span class="text-xs mt-2"># 팀내 study / 신기술 도입 주도</span><br><span class="text-xs mt-1"># 주니어 직원 과제 매니징 및 멘토 역할</span>',
            },
            {
                title: '<span class="text-lg mt-2 bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text font-bold text-transparent">현대오토에버</span>',
                subTitle: 'AI 개발자',
                date: '2020.10 - 2022.06',
                description:
                    '<span class="text-sm mt-1">1. 드론 영상 기반 지붕 검사 알고리즘 개발 및 실제 환경(QT) 적용</span><br>' +
                    '<span class="text-sm mt-1">2. 모바일 PDA 문자인식 시스템 개발 및 실제 환경(서버)에 적용</span><br>' +
                    '<span class="text-xs mt-2"># 팀내 study / 신기술 도입 주도</span><br><span class="text-xs mt-1"># 팀내 분위기 메이커</span>',
            },
            {
                title: '<span class="text-lg mt-2 bg-gradient-to-r from-blue-900 to-sky-800 bg-clip-text font-bold text-transparent">알체라</span>',
                subTitle: 'AI 개발자',
                date: '2019.04 - 2020.09',
                description:
                    '<span class="text-sm mt-1">1. 행동 인식 딥러닝 알고리즘 개발</span><br>' +
                    '<span href="https://medium.com/apache-mxnet/using-mxnet-to-detect-fire-d8afaf4d9e07" class="text-sm mt-1 bg-gray-100" target="_blank" rel="noreferrer noopener">2. 실내외 화재 탐지 딥러닝 알고리즘 개발 및 실제 환경(서버)에 적용</span><br>' +
                    '<span class="text-xs mt-2"># 팀내 study / 신기술 도입 주도</span><br><span class="text-xs mt-1"># 팀내 분위기 메이커</span>',
            },
            {
                title: '<span class="text-lg mt-2 bg-gradient-to-r from-green-600 to-green-300 bg-clip-text font-bold text-transparent">고영테크놀러지</span>',
                subTitle: 'AI 개발자',
                date: '2018.01 - 2019.03',
                description:
                    '<span class="text-sm mt-1">1. 딥러닝 알고리즘 기법을 적용한 문자 분류기 개발 및 실제 환경(MFC)에 적용</span><br>' +
                    '<span class="text-sm mt-1">2. 딥러닝 알고리즘 기법을 적용한 반도체 이미지 3D Reconstruction 개발 및 실제 환경(MFC)에 적용</span><br>' +
                    '<span class="text-xs mt-2"># 팀내 study / 신기술 도입 주도</span><br><span class="text-xs mt-1"># 팀내 막내로서 분위기 메이커</span>',
            },
        ],
    },
    {
        title: 'Education',
        items: [
            {
                title: '<span class="text-lg font-bold mt-2 bg-gradient-to-r from-rose-800 to-rose-300 bg-clip-text text-transparent">광운대학교 대학원</span>',
                subTitle: '로봇학과 머신러닝/딥러닝 전공',
                date: '2016.03 - 2018.02',
                description:
                    '<span class="text-sm mt-1">1. 평균 학점: 4.27</span><br><span class="mt-1 text-sm">2. 임베디드 SW 전문인력양성 과정 이수</span><br>' +
                    '<span class="mt-1 text-sm">3. 졸업논문 : 순환 신경망 기반의 행동 예측 방법</span><br>' +
                    '<span class="text-xs mt-2"># 열정적인 남자</span>',
            },
            {
                title: '<span class="text-lg font-bold mt-2 bg-gradient-to-r from-rose-800 to-rose-300 bg-clip-text text-transparent">광운대학교</span>',
                subTitle: '로봇학부 지능시스템 전공',
                date: '2010.03 - 2016.02',
                description:
                    '<span class="mt-1 text-sm">1. 평균 학점 : 3.79</span><br>' +
                    '<span class="mt-1 text-sm">2. 졸업논문 : 드론을 이용한 1 인칭 텔레프리젠스 시스템(우수논문상)</span><br>' +
                    '<span class="text-xs mt-2"># 치열하게 사는 남자</span>',
            },
        ],
    },
];
