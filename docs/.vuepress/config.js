module.exports = {
    title: '南武文库',
    description: '很酷，不说话',
    themeConfig: {
        nav: [
            {
                text: '南武新闻',
                link: '/news/',
            }, {
                text: '南武维基',
                link: '/wiki/',
            }, {
                text: '南武历史',
                link: '/history/',
            }, {
                text: '南武记忆',
                link: '/memory/',
            },
        ],
        sidebar: {
            '/history/':
                [
                    'ancient',
                    'modern',
                    'war',
                    'revolution',
                    'party',
                    'special_zone',
                    'nambu_group',
                    'progressivism',
                    'central_government',
                ],
            '/news/':
                [
                    '77th_anniversary_of_nambu_defense_war',
                    'kojun_meeting_with_second_army_political_commissar',

                ],
            '/wiki/': [
                {
                    title: '国家相关',
                    children: [
                        'nambu_democratic_republic',
                        'nambu_united_party',
                        'nambu_group',
                        'progressivism',
                        'central_leadership',
                        'nambu_congress',
                        'central_government',
                        'group_leadership',
                        'joint_ownership',
                        'nambu_group_economic_model',
                        'nambu_special_zone',
                        'kaijitsu_committee',
                        'great_nambu_empire',
                        'nambu_republic',
                        'nambu_democratic_republican_party',
                        'takezuka_koku',
                        'takezuka_group'
                    ]
                },
                {
                    title: '人物相关',
                    children: [
                        'nambu_kojun',
                        'hinata_akira',
                        'hayashi_fuyu',
                        'hisazaki_fumikuni',
                        'yamamoto_hakuha',
                        'togishi_norikazu'
                    ]
                },
                {
                    title: '其它',
                    children: [
                        'honbu_metropolis',
                        'song_of_nambu',
                        'nambu_army'
                    ]
                }
            ],
            '/memory/': [
                {
                    title: '国家相关',
                    children: [
                        'nambu_design'
                    ]
                },
                {
                    title: '法规相关',
                    children: [
                        'constitution',
                        'party_constitution',
                        'group_leadership_law',
                        'special_zone_law'
                    ]
                },
                {
                    title: '机关公文',
                    children: [
                        {
                            title: '南武联合党中央办公厅',
                            children: [
                                'further_promoting_construction_of_planned_economy'
                            ]
                        },
                        {
                            title: '南武民主共和国中央发展规划委员会',
                            children: [
                                'reform_of_group_leadership_system_in_kaijitsu'
                            ]
                        }
                    ]
                }
            ],
        },
    },
}