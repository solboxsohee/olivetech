const exampleData = {
    adm: {
        companyName: '행정안전부',
        business: '정부 및 공공기관',
        website: 'https://adm.mydata.go.kr',
        service: '가상 WORM 스토리지, PDS',
        logoSrc: '/cases/행안부.png',
        title: '행정안전부 공공 마이데이터 유통 시스템 구축 및 운영',
        intro: ' 국민의 데이터 주권 강화 및 구비서류 감축을 위해 2020년부터 정보주체의 요구에 따라 행정·공공기관이 보유한 본인정보를 본인 또는 제3자에게 제공하는 공공 마이데이터 사업이 진행되고 있습니다. \n 정보주체가 공공·민간 서비스 신청 시 필요한 행정서류를 전산으로 전송하도록 함으로써, 자원 절감 및 중복요구 제로화 등을 통한 업무 처리 효율성 증대를 목표로 하고 있으며 공공 부문 기업정보 제공 서비스 적용을 위하여 본인정보 제공 요구 권리 주체를 법인·단체로 확대 적용 추진하고 있습니다. 국가정보자원관리원 광주센터에 구축된 행정안전부의 공공 마이데이터 유통 시스템은 이용기관이 요청한 정보주체의 본인정보를 묶음정보로 제공하여 주는 시스템입니다. \n공공 마이데이터 유통 시스템에는 이용기관들에 제공된 묶음 정보를 일정 기간 안전하게 보존하기위한 임대 보안저장소(PDS) 시스템이 구축되어 있으며 보안저장소는 올리브텍의 WORM 스토리지와 올리브텍이 개발한 PDS 솔루션을 기반으로 운영되고 있습니다.',
        content:
            ' 행정안전부 본인정보 보안저장소 규격안에 100%부합되는 기능을 제공하고 있습니다. 월간 5천만 건 이상의 묶음정보를 안정적으로 처리하는 고성능을 제공하고 있으며, 실시간 복제 및 HA 구성을 통해 가용성 높은 서비스를 제공하고 있습니다. \n 지속적으로 확대되는 서비스 및 이에 따른 묶음정보 증대에 대비하여 보안 WORM 스토리지 용량과 성능을 지속적으로 확장할 수 있으며 향후 원격지 복제를 통한 재난복구(DR) 구성을 지원할 수 있습니다. 임대 PDS를 자체 구축 PDS로 전환하려는 이용기관들을 위해 올리브텍은 임대 PDS에서 자체 PDS로 데이터를 안전하게 이관할 수 있는 도구를 개발 제공하고 있으며, 이는 임대 PDS 이용기관들이 자체 PDS로 전환하는 것을 용이하게 해 줍니다.',
        useService: [
            ' 올리브텍 WORM 스토리지 솔루션',
            ' 올리브텍 공공 마이데이터 PDS 솔루션 (임대 PDS 용)',
            ' 임대 PDS에서 자체 PDS로 네트워크를 통해 데이터를 이관하는 도구',
        ],
    },
    pohang: {
        companyName: '포항테크노파크',
        business: '재단법인',
        website: 'https://www.ptp.or.kr/',
        service: 'Splentec WORM DF4200-24WE',
        logoSrc: '/cases/포항테크노파크.png',
        title: '2024년 제조업 AI 융합 기반조성 GPU서버 인프라 구축',
        intro: ' 포항테크노파크는 경상북도 내 철강산업 분야 중소기업의 제조현안 해결을 위한 AI융합기술 장비(고성능 GPU서버 등) 지원 인프라 구축사업을 진행하였습니다. 본 사업은 지역 제조 기업의 AI모델 및 서비스 검증에 활용, AI 솔루션 개발 및 실증 지원을 통한 AI 기업의 역량 강화 지원하는 것이 목적입니다. NVIDIA 고성능 GPU 서버, 이의 활용을 위한 고성능 워크스테이션과 함께 올리브텍의 고성능 대용량 WORM 스토리지를 학습데이터 축적 및 데이터 보호를 위해 도입하였습니다.',
        content:
            '대규모 데이터의 딥러닝 처리에 필요한 고성능 하드웨어 사양과 학습용 데이터의 지속적 축적에 필요한 500TB이상의 대용량 보안 스토리지를 확보하였으며, 향후 신규장비 도입 없이 확장 모듈 추가를  통해 최대 3PB 이상으로 데이터 용량을 확장할 수 있게 되었습니다. 또한 WORM 스토리지가 제공하는 데이터 무단삭제 및 변조 방지 기능을 통해  학습 및 분석에 사용되는 데이터의 무결성 보장을 통해 학습 결과의 신뢰성을 보장할 수 있게 되었으며 학습 및 분석을 위해 장기간 수집되고 축적되는 데이터를 우발적 삭제.훼손 혹은 랜섬웨어 등에 의한 삭제, 암호화 위협 등으로 부터 안전하게 보호할 수 있게 되었습니다.',
        useService: ['올리브텍 물리적 WORM 스토리지 DF4200-24WE (528TB)'],
    },
    gyeongsang: {
        companyName: '경상남도',
        business: '정부 및 공공기관',
        website: 'https://www.gyeongnam.go.kr/mydata/',
        service: 'SecuPDS v1.0',
        logoSrc: '/cases/경상남도.png',
        title: '공공 마이데이터 활용서비스 확대… 지원사업 신청 간소화',
        intro: '경상남도는 청년구직활동지원사업, 여성농업인 바우처 지원사업, 교복지원 사업 등 도민들을 위한 각종 지원사업을 신청할 수 있는 웹-사이트를 운영하고 있었습니다.지원 사업을 신청에는 각 지원사업 신청인의 적격 대상 여부 판정을 위해 필요한 민원서류들이 있습니다. 기존에는 이를 도민들이 정부24나 주민센터에서 별도로 발급받아 제출하여야 하였습니다. 이러한 불편함을 해소하기위해 경상남도는 공공 마이데이터 이용기관으로 등록하고 공공 마이데이터 서비스와 연계하여 지원사업신청을 간소화 할 수 있도록 개선하였습니다. 경상남도는 공공 마이데이터 이용기관 승인을 받기위한 필수 요소인 본인정보 보안저장소(PDS)를 당사의 SecuPDS v1.0을 도입하여 구축하였습니다.',
        content:
            '공공 마이데이터 활용 서비스는 행정안전부의 공공 마이데이터 유통체계를 이용해 행정·공공기관에 산재한 본인 정보 중 필요한 정보만 전송 받아 각종 지원사업을 온라인으로 간편하게 신청할 수 있는 서비스입니다. 기존에는 도민이 공공 지원사업 신청에 필요한 주민등록 등초본, 건강보험자격득실확인서, 사업자등록증 등과 같은 증빙서류를 발급받아 직접 창구로 찾아가야 했으나, 공공 마이데이터 활용 서비스를 이용하면 별도 증빙서류를 제출할 필요가 없어 신청 절차가 간소화되었습니다. 또 제출해야 하는 서류 항목 중 필수 정보만 최소한으로 선별해 제공함으로써 불필요한 개인정보 유통도 방지할 수 있습니다.',
        useService: ['올리브텍 물리적 WORM 스토리지 DF4200-24WE (528TB)'],
    },
};

export default exampleData;
