var config = {
    style: 'mapbox://styles/mushizhe/ckp2a168w4pgl17nb1jsxpnim',
    accessToken: 'pk.eyJ1IjoibXVzaGl6aGUiLCJhIjoiY2ttMDgzN3h6MHFpZjJvbXJmcXFkbDk2MCJ9.Bt4mgu3qqA_HL7Xv-mBORg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: '三宝树生长史 ',
    subtitle: '——黄龙寺综合地理认知及故事地图表达',
    byline: '',
    //footer: '未完待续……</br>佛教极力提倡“依正不二”等思想，认为，因为人类的贪欲等非理智的错误的行为，侵犯了自然的尊严，最终还是通过自然环境的恶化反过来侵犯了人类自己的尊严，两败俱伤。佛法的“依正不二”的原理，就是立足于这种自然观，明确主张人类和自然之间不是相互对立的关系，而是相互依存的关系。生命的价值，就在于体认包括人类在内的各种生命体之间平等协调和相互依存的真理后，才能闪耀着光辉，才会在我们心中确立生态平衡的观念。',
    chapters: [{
        id: 'glacier-np',
        alignment: 'half',
        title: '黄龙寺',
        image: 'https://m.tuniucdn.com/fb2/t1/G1/M00/75/05/Cii9EViatUqIG9A5AARSrdLgdbcAAHWwgNdVc0ABFLF530_w640_h480_c1_t0.jpg',
        description: '  黄龙寺，位于江西省九江市庐山玉屏峰麓。所在踞庐山之中，前对天王峰，后枕玉屏峰，西为赐经亭，下临大溪，寺宇为"万山环抱，松杉碧绕"，修篁蔽日，景色奇幽，"居然胜地"。相传早在晋代，释昙诜在此修持，并栽下2株婆娑宝树、1株银杏。庐山黄龙寺系明代僧人释彻空于万历年间(1573— 1620) 肇建的。 相传， 当年释彻空云游至玉屏峰下， 目睹这里“ 山势环拥”， 丛林茂密， 清潭飞瀑， 风景幽邃， 即“ 心爱之”， 并有住下弘法之愿。但当时看到山麓之中， 千鹿成群， 游嬉其中， 不可接近， 有碍建寺。 当即默念祈祷“ 此间于我有缘， 群鹿为徙”。 次日， 释彻空再往探看， 果如所愿，“ 不见鹿踪”。 于是， 释彻空就地殊茅立寺。 初以此处曾是群鹿出没之处， 山野空旷， 名之“ 鹿野”。 ',
        location: {
            center: [115.95555, 29.4911],
            zoom: 8,
            pitch: 0.00,
            bearing: 0.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: 'kaipian',
        alignment: 'centre',
        title: '开篇•缘起',
        //image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages03%2F20210508%2F03883c2295c946959226536ea7494167.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626172326&t=441fe8b02eefc48d5c6d02862eac443b',
        description: '  千年前，一粒银杏树的种子在庐山默默扎根，悄然生长。千年后，明代僧人彻空禅师肇建黄龙寺，在这棵已长得郁郁葱葱的银杏树旁又栽下了几颗柳杉幼苗，这就是三宝树的前身。幼弱的柳杉树同银杏树和周边许许多多树种一起在这片土壤开启了它们的新生活。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 12.92,
            pitch: 39.50,
            bearing: 6.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: 'ziran',
        alignment: 'left',
        title: '自然生长环境',
        //image: 'https://i.loli.net/2021/06/11/56a1S7jE9bQpKrF.jpg',
        description: '  庐山黄龙寺，坐落于江西省九江市庐山玉屏峰麓。所在踞庐山之中，前对天王峰，后枕玉屏峰，西为赐经亭，下临大溪。寺宇为"万山环抱，松杉碧绕"，修篁蔽日，景色奇幽，"居然胜地"。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 12.92,
            pitch: 39.50,
            bearing: 36.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
        // {
        //     layer: 'gnpglaciers-2015',
        //     opacity: 0
        // }

    },
    {
        id: 'turang',
        alignment: 'left',
        title: '土壤、植被类型',
        showlayer:true,
        //image: '',
        description: '为了体现黄龙寺地区植被与土壤的特殊性，我们制作了高程800~1000米地区的土壤与植被分布图。点击图层可查看具体土壤类型以及植被类型名称。',
        location: {
            center: [115.955, 29.51],
            zoom: 11,
            pitch: 0,
            bearing: -15
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 1
        },
        {
            layer: 'soil',
            opacity: 1
        }

        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: 'zhongpian',
        alignment: 'centre',
        title: '中篇•雨后',
        //image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages03%2F20210508%2F03883c2295c946959226536ea7494167.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626172326&t=441fe8b02eefc48d5c6d02862eac443b',
        description: '  三宝树和它的同伴们就在这里磕磕绊绊地成长起来，两棵柳杉树长出了密密的叶子，树干也愈发粗壮了。三宝树生长的地方三面环山，一面通向山外。柳杉树沐浴着阳光，欢快地汲取着水分，风轻轻吹过，一切都非常惬意。但他偶尔也会想山外的世界是怎样的。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 12.92,
            pitch: 39.50,
            bearing: 6.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: 'dixing',
        alignment: 'full',
        title: '寺庙选址条件——气候',
        //image: '',
        video: './images/climate.mp4',
        description: '黄龙寺位于庐山东谷向斜谷底部，海技900米左右。按垂直自然带的划分属于山地暖温带气候。因其西面、背面、东南面地势均较黄龙寺高，仅在西南面开一小口，如围椅状。并且其受牯岭延伸山体的阻挡，形成一个与河谷相同的山间盆地，水汽不易外泄反而汇聚。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 11,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: '地形',
        alignment: 'left',
        title: '寺庙选址条件——地形',
        image: '',
        description: '黄龙寺区域大致呈现南北朝向，平均坡度12°，坡形呈保护状，正所谓“千峰环一寺”。黄龙寺区域具备了寺庙选址“宅幽而势阻，地廊而形藏”的特点。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 12.92,
            pitch: 51.50,
            bearing: -26.40
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }

        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }

        ]
    },
    {
        id: 'agassiz1998',
        alignment: 'left',
        showlayer: true,
        title: '寺庙选址条件——地形',
        image: '',
        description: '✓ 宗教因素:<br/>用中国佛教寺庙的相地方法来看， 黄龙寺寺宇为 "万山环抱，松杉碧绕"，修篁蔽日， 景色奇幽， "居然胜地"，山清水秀， 所在踞庐山之中， 前对天王峰， 后枕玉屏峰， 西为赐经亭， 下临大溪， 符合佛教寺庙选址传统。<br/>✓外部环境因素:<br/> 外部环境和僧估生活的关系紧密， 佛教山地寺庙的相地选址要求良好的小气候、 背风向阳、 气流通畅、 能排泄雨水、 靠近水源及靠近树林便于采薪、 生产等。 ',
        location: {
            center: [115.95555, 29.4911],
            zoom: 11.5,
            pitch: 20.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: 'taiyang',
        alignment: 'full',
        title: '寺庙选址条件——太阳辐射',
        image: 'https://i.loli.net/2021/06/13/AsTkqpYld7iwJKj.png',
        description: '作为温度的主要影响因素之一，太阳辐射可以部分表示温度特征。上图展示了黄龙寺周边区域在2020年两分两至的日均太阳辐射分析结果，可以看出黄龙寺区域相对于其他区域太阳辐射量较高，在其他条件相似的情况下，可以表征黄龙寺区域温度相对于其他区域较高。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 13.51,
            pitch: 41.00,
            bearing: 78.33
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: '尾篇',
        alignment: 'centre',
        title: '尾篇•浮沉',
        //image: 'https://i.loli.net/2021/06/16/n9HRsB6GpcOwiCz.jpg',
        description: '  三宝树数次险里逃生，矗立在黄龙寺旁，见证黄龙寺的兴衰荣辱。民国时期，三宝树看到黄龙寺换上了新的有一位看起来很有名望的先生题写的牌匾。不久之后，战火纷飞，黄龙寺未能幸免，为战火所创。直到新中国成立后，五十年代中期黄龙寺经过维修整饰，恢复了几分从前的荣光。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 12.92,
            pitch: 39.50,
            bearing: 6.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: '人文1',
        alignment: 'full',
        title: '万历年间（1573-1620），明代僧人释彻空肇建黄龙寺.',
        image: 'https://i.loli.net/2021/06/14/cQXfi6qJYezgKn5.png',
        description: '三宝树风景区中有黄龙寺遗址。相传此寺为高僧彻空为降伏黄龙潭中的黄龙而建造的。当时黄龙潭中潜藏一条桀骜不驯的黄龙，时常乱发脾气，搅得山洪暴发，淹没良田，百姓遭灾，然而又潜于崖陡潭深的黄龙潭中。这样，黄龙的所作所为，已使下游地区常受洪涝之苦。后来，高僧彻空禅师云游至此，听说竟有如此为非作歹之黄龙，便以佛家之普渡众生教义，驯服了这条黄龙。黄龙归善后，它的后代便化为群蛟，再次兴风作浪，祸害百姓。彻空禅师见此情景，便敲响神钟，群蛟闻钟声而惊逃。为了彻底降服群蛟，造福黎民，彻空禅师便在离黄龙潭不远处，修建了黄龙寺，以镇群蛟，并在黄龙寺赐经亭旁掘下制龙洞，将神钟倒扣洞中，这样便降伏了群蛟孽龙，故三宝树附近有一块巨石，上刻“降龙”两字，这就是那口神钟所化的“降龙石”。数百年过后， 彻空禅师早已归西天， 所降群龙亦已大多归正， 唯有红黑二龙， 恶性不该， 仍常常化作红黑二云冲天而起， 凌空鏖战， 搅得周天昏暗， 雷电交加， 大雨倾盆。 两条孽龙激战所经之地， 树木连根拔起， 农舍不剩片瓦， 惟有彻空禅师所建的黄龙寺藏经图依旧岿然不动， 赐经亭、 三宝树完好无损。 ',
        location: {
            center: [115.95555, 29.4911],
            zoom: 13.51,
            pitch: 41.00,
            bearing: 78.33
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: '人文2',
        alignment: 'full',
        title: '1926年康有为题写匾额',
        image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1621693409,4249678625&fm=26&gp=0.jpg',
        description: '  康有为第三次上庐山，曾到黄龙寺游访，并题写"黄龙寺"寺额和"禅堂"之匾，至今保存完好。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 12.92,
            pitch: 39.50,
            bearing: 6.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: '人文3',
        alignment: 'full',
        title: '抗战期间为战火所创',
        image: 'https://i.loli.net/2021/06/13/d2Dyu3W58c9FGvT.jpg',
        description: '黄龙寺为仿宫殿式建筑群，"规制从木阁度殿"，掩映于幽邃空谷、茂林修竹之中，显得格外庄严肃穆，神秘缥缈。当时，释彻空十分看重寺宇周围林木的保护，告诫僧众对寺宇周围、山谷之中的一竹一木，"山木不得折一枝。折之，必讼至枝长而后已"。而后，奉此寺观，代以相传，寺僧祖树木为生命。以致当时有人发出感慨"以故丛林茂密。予过其岭，徘徊不忍去"。黄龙寺因此也声名远播，久传不衰。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 12.92,
            pitch: 39.50,
            bearing: 6.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: '人文4',
        alignment: 'full',
        title: '新中国成重新修葺并作为庐山上唯一佛教活动场所，1957年列为江西省文物保护单位',
        image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.tuchong.com%2F485033%2Ff%2F23427484.jpg&refer=http%3A%2F%2Fphoto.tuchong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626187926&t=150d0dba7df254f6ca2da6ee36e274b9',
        description: ' 黄龙寺的重建并没有按照中式佛寺的布局，毕竟在山野之中，地形不变，所以只有前殿的大雄宝殿，还有后殿的黄龙寺，正好反过来了。黄龙寺内供奉的是释加牟尼佛，并没有多么的富丽堂皇、宏伟高大，显得朴素大方，威严不减。',
        location: {
            center: [115.95555, 29.4911],
            zoom: 12.92,
            pitch: 39.50,
            bearing: 6.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    },
    {
        id: 'jiewu',
        alignment: 'full',
        title: '未完待续……',
        //image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.tuchong.com%2F485033%2Ff%2F23427484.jpg&refer=http%3A%2F%2Fphoto.tuchong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626187926&t=150d0dba7df254f6ca2da6ee36e274b9',
        description: ' 佛教极力提倡“依正不二”等思想，认为因为人类的贪欲等非理智的错误的行为，侵犯了自然的尊严，最终还是通过自然环境的恶化反过来侵犯了人类自己的尊严，两败俱伤。佛法的“依正不二”的原理，就是立足于这种自然观，明确主张人类和自然之间不是相互对立的关系，而是相互依存的关系。生命的价值，就在于体认包括人类在内的各种生命体之间平等协调和相互依存的真理后，才能闪耀着光辉，才会在我们心中确立生态平衡的观念。 ',
        location: {
            center: [115.95555, 29.4911],
            zoom: 12.92,
            pitch: 39.50,
            bearing: 6.00
        },
        onChapterEnter: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ],
        onChapterExit: [{
            layer: 'forest',
            opacity: 0
        },
        {
            layer: 'soil',
            opacity: 0
        }
        ]
    }
    ]
};
