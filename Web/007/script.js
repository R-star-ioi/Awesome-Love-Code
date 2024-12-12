const questions = [
{ "question": "为使调查问卷具有可选性、规范性和可行性，要确定调查目的、来源和局限、及数据收集方法。", "correct": false },
{ "question": "宣传资料种类很多，按形式分为四大类，包括印刷宣传品、视听资料、实物资料及新媒体传播资料。", "correct": true },
{ "question": "膳食纤维来主要源于植物性食物，如水果、蔬菜、豆类、坚果和谷类。", "correct": true },
{ "question": "营养质量指数（INQ）＜1 表示食物提供的营养素的能量大于提供能量的能量。", "correct": false },
{ "question": "社区营养干预计划是在社区诊断的基础上拟订的总体计划，包括人员培训、活动开展、信息收集、总结评价等。", "correct": true },
{ "question": "生长发育中儿童及青少年的能量处于负平衡状态。", "correct": false },
{ "question": "均匀性群体中，当需要量比较一致时，应利用 EAR 切点法去设计低于需要量和不超过 UL 范围。", "correct": false },
{ "question": "大众媒介的目标人群数量相对较大，信息相对简单化且较完整。", "correct": true },
{ "question": "脂肪的消化吸收主要在小肠末端，在脂肪酶的作用下分解为脂肪酸和甘油，少量未被消化的脂肪则有粪便排出体外。", "correct": false },
{ "question": "学龄儿童体格维持稳步增长，除身高体重外的其他器官、系统，脑的形态发育已逐渐接近成年 人水平，独立活动能力逐步加强。", "correct": false },
{ "question": "一般来讲，不饱和脂肪酸和短链脂肪酸含量高的脂肪熔点越高，越容易消化。", "correct": false },
{ "question": "非语言传播是指除了语言外，借助手势、姿势、音容笑貌等非语言符号实现信息的传播和分享。", "correct": false },
{ "question": "青少年时期是生长发育的高峰期，能量的需要也达到了高峰，因此一般不过度限制儿童膳食脂肪的摄入。", "correct": true },
{ "question": "有机磷农药中毒的预防措施主要是保持蔬菜新鲜。", "correct": false },
{ "question": "毛细血管脆性试验是目前评价机体维生素 C 状况最实用和可靠的指标。", "correct": false },
{ "question": "血液抗凝剂种类繁多，好的抗凝剂应该是用量少、溶解快、带干扰试验的杂质和改变细胞的形态。", "correct": false },
{ "question": "对于原发性锌缺乏的预防，主要应以膳食调整为主，增加动物性食物的摄入量，特别是瘦肉、动物内脏及海产品等。", "correct": true },
{ "question": "对于继发性锌缺乏的预防，主要应以膳食调整为主，增加动物性食物的摄入量，特别是瘦肉、动物内脏及海产品等。", "correct": false },
{ "question": "粪便和尿液用于营养学研究，可以作为评价食物中维生素的吸收率以及影响维生素吸收的主要因素。", "correct": false },
{ "question": "24h 回顾法可用于家庭中个体的食物消费情况调查，也适用于描述不同人群个体的食物摄入情况。", "correct": true },
{ "question": "为了使调查结果能更好的反映调查对象的一般膳食情况，24 小时回顾法通常选择 1 个工作日和 2 个休息日时间。", "correct": false },
{ "question": "记账法是常用的一种调查方法，记账时要准确掌握摄入熟食的重量，按照生熟比算出每人所食各种生食的重量，再计算出每人每日各种生食物的摄取量。", "correct": false },
{ "question": "数据库应具有一致性、安全性、可维护性、独立性、保密性。", "correct": false },
{ "question": "调查对象对提供完整准确信息的积极性受其对研究结果的重要性和适用性认知程度的影响。因此，调查者需要花一些时间解释研究的目的和重要性。", "correct": true },
{ "question": "评价食品卫生质量的化学污染指数常用菌落总数和大肠杆菌表示。", "correct": false },
{ "question": "食品营养标签表示的任何营养信息，应真实、客观，不得标示虚假信息，不得夸大产品的营养作用或其他作用。", "correct": true },
{ "question": "所有预包装食品强制性表示的内容包括能量、核心营养素的含量及其占营养素参考值百分比和营养声称。", "correct": false },
{ "question": "营养声称、营养成分功能声称标签要在指定的位置标示，但其字号不得大于食品名称和商标。", "correct": false },
{ "question": "炼乳的酸度( °T）应小于 148。", "correct": false },
{ "question": "生物富集是指化学物质每经过一种生物体，其浓度就有一次明显降低。", "correct": false },
{ "question": "冷冻干燥后食品加水复原可恢复到原有的形状与结构。", "correct": true },
{ "question": "食品中的二噁英主要来自环境污染，尤其是经过食物链的富集作用，可在动物性食品中达到较高的浓度。", "correct": true },
{ "question": "副溶血弧菌食物中毒主要食品包括海产品和盐腌食品。", "correct": true },
{ "question": "河豚鱼中毒的毒素是河豚毒素，是血液毒。", "correct": false },
{ "question": "肥胖不仅是一种独立疾病，也是高血压、心脑血管疾病、糖尿病、脂肪肝、肿瘤等多种慢性疾病的独立危险因素。", "correct": false },
{ "question": "我国预防冠心病指南分为一级预防和二级预防，预防冠心病，应尽量做到合理膳食，属于二级预防。", "correct": false },
{ "question": "痛风患者体重不宜减得过快，避免机体产生大量酮体，诱发痛风急性发作。", "correct": true },
{ "question": "低钠高脂饮食是血压升高的因素之一，如同时习惯高钾饮食对血压的影响更大。", "correct": false },
{ "question": "维生素 A 缺乏病引以眼、皮肤改变为主的全身性疾病。", "correct": true },
{ "question": "干瘦型营养不良的病人体重低于其标准体重的 8%。", "correct": false },
{ "question": "维生素 B1 缺乏伴可能出现感觉疲乏无力、对称性感觉异常。", "correct": true },
{ "question": "社区营养工作是一个单纯的部门工作，它不涉及卫生、教育、工商、新闻媒介等其他部门。", "correct": false },
{ "question": "在农村经济不发达地区，营养摄入不足导致的缺铁性贫血、维生素 A 缺乏、佝偻病等营养缺乏病发病率高于城市区域。", "correct": true },
{ "question": "社区营养是指在社区内,运用营养科学理论、技术及社会性措施，研究和解决社区人群营养问题，包括食物生产和供给、膳食结构、饮食行为、社会经济、营养政策、营养教育及营养性疾病预防等方面的工作。", "correct": true },
{ "question": "知信行理论模式是将人们行为的改变分为获取知识、产生信念及形成行为 3 个不连续过程。", "correct": false },
{ "question": "健康传播是指以“人人健康”为出发点，运用各种传播媒介、渠道和方法，为维护和促进人类健康的目的而获取、制作、传递、交流、分享健康信息的过程。", "correct": true },
{ "question": "营养教育的实施步骤包括：制订营养教育计划-确定营养教育途径和资料，教育前期准备，实施营养教育计划，教育效果评价。", "correct": false },
{ "question": "营养教育是以改善人们营养状况为目标，通过营养科学的信息交流，帮助个体和群体获得食物与营养知识，形成科学合理饮食习惯的教育活动和过程，是健康教育的重要组成部分。", "correct": true },
{ "question": "近年来有不少国家在高危人群中采用铁强化食品来预防缺铁的发生，我国试行的铁强化酱油、铁强化面粉等，都获得了一定的效果。", "correct": true },
{ "question": "育龄妇女是铁和碘缺乏的高危人群，怀孕前如果缺铁、碘，可导致早产、胎儿生长受限、新生儿低出生体重， 以及更易发生妊娠期缺铁性贫血。", "correct": false },
{ "question": "老年人身体对缺水的耐受性下降，饮水不足可对老年人的健康造成明显影响.因此要足量饮水。每天的饮水量达到 1700-2100 mL 应少次多量，主动饮水.首选温热的白开水。", "correct": false },
{ "question": "学龄前儿童铁缺乏的原因：一是儿童生长发育快，需要的铁较多；二是儿童内源性可利用的铁较少，其需要的铁较成人更依赖食物铁的补充。", "correct": true },
{ "question": "乳母的营养是泌乳的基础，尤其脂肪营养状况对泌乳有明显的影响。", "correct": false },
{ "question": "添加辅助食品的原则，每次只添加 1-2 种新食物，逐步适应，达到食物多样化。", "correct": false },
{ "question": "母乳是婴儿最理想的食物，纯母乳喂养能满足婴儿 8 月龄以内所需要的全部液体、能量和营养素。", "correct": false },
{ "question": "婴儿的能量需要包括基础代谢、体力活动、食物特殊动力作用、能量储存及排泄耗能、生长发育的需要，其总能量的需要主要依据年龄、体重及发育速度予以估计。", "correct": true },
{ "question": "由于食物中铁的利用率高，为预防缺铁性贫血除食用富铁食物补充铁外，一般不建议补充铁补充剂。", "correct": false },
{ "question": "叶酸摄入不足会造成婴儿低出生体重、胎盘早剥和胎儿神经管畸形，新生儿溶血，还有常见的孕妇巨细胞性贫血。", "correct": false },
{ "question": "孕妇贫血是最常见的问题之一，而且妊娠期贫血将会增加合并其他疾病和升高死亡率的风险，但对胎儿不会造成太大影响。", "correct": false },
{ "question": "食物标签上的资料可用来估算宏量营养素的情况，但一般不能很好地反映微量营养素含量及与当前推荐摄入量的符合程度。", "correct": true },
{ "question": "食物种类繁多，不同的食物具有不同的口味和营养特点，所以选择食物是要尽可能的全面和多样化。", "correct": false },
{ "question": "根据定义，RNI 是一个能满足人群中 97%~98%的个体的需要的摄入水平（假定人群的需要量呈正态分布）。", "correct": true },
{ "question": "人群中日常摄入量超过 UL 的这一部分人可能面临健康风险。", "correct": true },
{ "question": "膳食营养指导和管理的重要手段就是宣传《中国居民膳食指南》，向消费者灌输“均衡膳食”的理念。", "correct": false },
{ "question": "幼儿对谷类食物的需要量逐渐增多，在谷类食物的选择上应注意选择含植酸盐少的精米精面，防止其影响食物中矿物元素的吸收。", "correct": false },
{ "question": "微波灭菌与常规加热灭菌相比，有利于维生素 C、氨基酸的保留。", "correct": true },
{ "question": "谷类的维生素主要存在糊粉层中。", "correct": false },
{ "question": "畜肉可提供多种维生素，主要以 B 族维生素和维生素 A 为主。", "correct": true },
{ "question": "豌豆蛋白质含量高于大豆。", "correct": false },
{ "question": "牛奶经过乳酸菌发酵后，游离的氨基酸和肽增加，更易于消化；乳糖减少，使乳糖酶活性低的成人易于接受。", "correct": true },
{ "question": "畜肉中，鸡肉的脂肪含量最高，羊肉次之，牛肉最低。", "correct": false },
{ "question": "干酪中的优质蛋白质大部分为乳清蛋白。", "correct": false },
{ "question": "酱油和酱是以小麦、大豆等碳水化合物为主要原料，接种黄曲霉素菌种，经发酵酿制而成的。", "correct": false },
{ "question": "微量元素是指在人体内的含量小于 0.1%体重的矿物质，分为人体必需的微量元素、人体可能必需的微量元素、具有潜在毒性的微量元素。", "correct": false },
{ "question": "高 GI 食物进入肠胃后消化快、吸收率高，葡萄糖进入血液后峰值高，释放快。", "correct": true },
{ "question": "糖类吸收的主要部位是在小肠的上段。", "correct": false },
{ "question": "维生素 A 可维持正常视觉功能，维护上皮组织细胞的健康，维持骨骼正常生长发育，促进生长与生殖。", "correct": true },
{ "question": "钙的摄入量过量对机体不会产生不利影响。", "correct": false },
{ "question": "每日膳食需要量在 100mg 以上的，称为常量元素，有钙、镁、钾、钠、磷、氯共六种。", "correct": true },
{ "question": "蛋白质的化学结构非常复杂，按营养价值分为完全蛋白质、半完全蛋白质和不完全蛋白质。", "correct": true },
{ "question": "当细胞内钠含量增多时，水进入细胞引起水肿，反之丢失钠过多，水量减少，引起脱水。", "correct": true },
{ "question": "维生素 B6 缺乏可引起脚气病。", "correct": false },
{ "question": "基础代谢是维持人体最基本生命活动所必需的能量消耗。测定前需空腹 24 小时，室温保持在 26～30℃ , 清醒静卧，全身肌肉放松。", "correct": false },
{ "question": "碳水化合物根据聚合度可分为糖、寡糖、多糖、糖醇。", "correct": false },
{ "question": "水摄入不足或者水丢失过多，可引起体内失水亦称为脱水。", "correct": true },
{ "question": "幼儿 3 岁以后的体重增长变慢,每年增长 1.5-2.0kg,增长的速度趋于缓慢,直至青春期开始再次加快。", "correct": false },
{ "question": "由于老年人体内的瘦体组织(去脂组织)或代谢活性组织减少,脂肪组织相对增加,与中年人相比,老年人的基础代谢降低 15%~20%。", "correct": true },
{ "question": "在孕期，肠道对一些营养素，如铁、钙等的吸收量增加。", "correct": true },
{ "question": "乳母膳食中维生素 B1 摄入不足时， 以纯母乳喂养的婴儿不易发生湿性脚气病。", "correct": false },
{ "question": "消化系统由消化管和消化腺两部分组成。消化管包括口腔、食管、 胃、小肠、结肠。", "correct": false },
{ "question": "胆汁是由肝细胞不断生成的具有甘味的有色液汁。", "correct": false },
{ "question": "根据血液的循环途径和功能不同，可将血液循环分为体循环（大循环）与肺循环(小循环）两部分。", "correct": true },
{ "question": "公共营养师职业守则是对从事公共营养师职业的人员的职业品德、职业纪律、职业责任、职业义务、专业技术胜任能力以及与同行、社会关系等方面的要求,是每一个从事公共营养师职业的人员必须遵守和履行的。", "correct": true },
{ "question": "职业责任是从业者对社会、对他人所承担的责任和奉献。", "correct": false },
{ "question": "职业良心具有内隐性，只能通过行为进行判断。", "correct": true },
{ "question": "公共营养师的职业守则是对其职业品德.纪律.责任.义务.技能以及与同行.社会关系等方面的要求。", "correct": true },
{ "question": "职业道德不只是有助于提高个人职业素养和本行业的发展，还可以正确整个社会道德水平的提高发挥重要作用。", "correct": true },
{ "question": "职业道德只是有助于提高个人职业素养和本行业的发展。", "correct": false },
{ "question": "职业道德的作用包括协调职职能、促进职业发展、提高全社会的道德水平。", "correct": false },
{ "question": "职业道德是人们在从事职业活动的过程中形成的一种外在的. 自律性的约束机制。", "correct": false },
{ "question": "适量运动的内容包括运动类型、运动强度、运动持续时间、运动频率等。", "correct": true },
{ "question": "近年来有不少国家在高危人群中采用铁强化食品来预防缺铁的发生，我国试行的铁强化酱油、铁强化面粉等，都获得了一定的效果。", "correct": true },
{ "question": "碳水化合物、蛋白质、脂肪经体内代谢后可以释放能量，称为“产能营养素”。", "correct": true },
{ "question": "人体每天都要从饮食中获得所需的各种营养素，不同的个体由于其年龄、性别、生理及劳动状况不同，所以对各种营养素的需要量可能不同。", "correct": true },
{ "question": "社区营养的目的是通过开展营养调查、营养干预、营养监测、营养教育和营养治疗等社区营养工作。", "correct": false },
{ "question": "加强防止食品污染的宣传教育，在食品生产、加工、储存、销售过程以及使用前各个环节应保持清洁卫生，防止细菌对食品的污染。", "correct": true },
{ "question": "酱油和酱是以小麦、大豆等碳水化合物为主要原料，接种黄曲霉素菌种，经发酵酿制而成的。", "correct": false },
{ "question": "叶酸缺乏的原因很多，大致可分为:摄入不足，消化、吸收、利用障碍，需要量增高及排出过多。", "correct": true },
{ "question": "在经济不发达地区，营养摄入不足导致的缺铁性贫血、维生素 A 缺乏、佝偻症等发病率高于经济发达区域。", "correct": true },
{ "question": "维生素 B1、维生素 B2、维生素 B6、维生素 B12、维生素 C、烟酸、叶酸都属于水溶性维生素。", "correct": true },
{ "question": "胎儿、胎盘、羊水、增加的血浆容量及增大的乳腺和子宫被称为必要性体重增加。", "correct": true },
{ "question": "胃蛋白酶原无活性，在胃酸的作用下被激活成有活性的胃蛋白酶。", "correct": true },
{ "question": "随机对照试验是把干预人群随机分成两组，一组施加干预措施，一组施加对照措施，然后跟踪观察两组人群的结局。", "correct": false },
{ "question": "调查问卷中的问题次序要条理清楚、顺理成章、符合逻辑顺序，一般可将容易回答的问题放在前面，敏感性问题放在中间，较难回答的问题放在最后。", "correct": false },
{ "question": "不同食物来源的蛋白质的营养价值取决于该蛋白质中必需氨基酸的含量与比值，一般来讲，动物蛋白质的营养价值高于植物蛋白质。", "correct": true },
{ "question": "中小学生所获得的营养仅维持生命活动和生活劳动的需要。", "correct": false },
{ "question": "《中国居民膳食营养素参考摄入量》建议 3~6 岁学龄前儿童膳食能量、蛋白质及脂肪的参考摄入量为 5.02~6.69MJ/d（1200~1600kcal/d），其中女孩稍高于男孩。", "correct": false },
{ "question": "习惯饮用葡萄酒是日本膳食模式的特点。", "correct": false },
{ "question": "“红细胞生成缺铁期”属于体内缺铁的第二个阶段。", "correct": true },
{ "question": "血液样品的种类包括：指血、耳垂血、足跟血、静脉血、眼眶血。", "correct": true },
{ "question": "调查表建立数据库，数据库包括五个变量，调查对象编码变量长度至少 2 位，最多 6 位。", "correct": false },
{ "question": "膳食账目是记账法的基础，要求被调单位的伙食账目完善，数据可靠。", "correct": true },
{ "question": "营养强化的主要目的是增加食品对特定人群特定营养素的补充。", "correct": false },
{ "question": "由于大量施用农药以及工业“三废”的污染，大量农药进入空气、水体和土壤，成为环境污染物属于间接污染。", "correct": true },
{ "question": "营养教育的主要领域包括对餐饮业、农业、商业、轻工业、医疗卫生、疾病控制、政府等部门的有关人员进行营养知识培训。", "correct": true },
{ "question": "无论作为独立的健康问题，还是作为其他健康问题的影响因素，运用健康教育与健康促进的理论和方法改变人们的健康行为是必要的，而且是可行有效的。", "correct": false },
{ "question": "孕妇补充叶酸的最佳时间是孕后一个月。", "correct": false },
{ "question": "为宜均匀性群体计划膳食，主要步骤是：确定计划目标、设计食谱、评估计划的结果。", "correct": false },
{ "question": "胰液中无机物成分中最重要的是碳酸氢盐，其主要作用是中和进入十二指肠的胃酸，使肠黏膜免受胃酸的侵蚀。", "correct": true },
{ "question": "全世界的教师都无一例外地遵守为人师表、关爱学生、教书育人的职业道德，体现的是职业道德的普遍性。", "correct": true },
{ "question": "副溶血弧菌常污染水产品，中毒后大多在 5~10h 内发病，症状多为腹痛、水样便、黏血便、高烧。", "correct": false },
{ "question": "维生素 A(视黄醇)，属于脂溶性维生素，只存在于动物性食物中。", "correct": true },
{ "question": "用于寄生虫及虫卵检测研究的粪便样品可冷冻保存。", "correct": false },
{ "question": "尿液样品一般在常温下保存 4-6 个小时。", "correct": false },
{ "question": "食物编码由 6 位数字组成，前 2 位数字是食物的亚类编码。", "correct": false },
{ "question": "制定食品安全标准，应当以保障公众身体健康为宗旨，做到科学合理、安全可靠，食品安全标准是强制性的标准。", "correct": true },
{ "question": "当收缩压大于 140mmHq 和舒张压大于 90mmHg，即可诊断为高血压。", "correct": false },
{ "question": "肿瘤的发病原因中膳食营养因素约占 1/3，所以通过膳食营养的干预来防治肿瘤是可行的措施。", "correct": true },
{ "question": "在我国以信息传播为主要干预手段的健康教育及作为采用综合策略的健康促进项目的一个部分而开展的传播活动，被称为健康传播活动或项目。", "correct": false },
{ "question": "同年龄男生和女生在儿童时期对营养素需要的差别很小，从学龄期开始，男生和女生的营养需要出现较大的差异。", "correct": false },
{ "question": "母体摄入充足的钙可促进胎儿的生长发育和预防先天性畸形。", "correct": false },
{ "question": "\"荤素搭配，食物多样，均衡营养\"是《中国居民膳食指南》的核心思想。", "correct": false },
{ "question": "将营养素摄入目标转化为相应的膳食计划时，常用的方法是将以食物为基础的膳食参考摄入量作为依据，根据个体需要量的特殊性再进行适当的调整。", "correct": false },
{ "question": "体内水的来源包括饮水和食物中的水及内生水三大部分。", "correct": true },
{ "question": "维生素 K 缺乏的主要疾病是“新生儿出血症”。", "correct": true },
{ "question": "小肠液是由小肠黏膜中的小肠腺分泌，呈弱碱性，pH 值约为 7.6。", "correct": true },
{ "question": "与婴儿期相比，学龄前儿童体格发育速度相对减慢，但仍保持稳步地增长，其下肢增长幅度超过头颅和躯干。", "correct": true },
{ "question": "乳母最主要的生理特征一方面是要逐步补偿妊娠、分娩时所损耗的营养素储备，促进各器官恢复，另一方面是分泌乳汁、哺育婴儿。", "correct": true },
{ "question": "在工作中不得不懂装懂，敷衍了事；不得抄袭、窃取他人的劳动成果，不得浮夸和吹嘘自己体现了公共营养师认真负责、爱岗敬业和忠于职守的职业守则。", "correct": false },
{ "question": "职业道德是通过知识学习和社会实践，在社会和职业环境下逐渐养成的优良的职业品质。", "correct": true },
{ "question": "试探性问题是指提问者把重要人物、团体或自己的观点强加在问话里，有暗示或诱导对方按“有希望的倾向”作出回答的问题。", "correct": false },
{ "question": "动物性食物多，植物性食物少属于地中海膳食模式的特点。", "correct": false },
{ "question": "暗适应能力降低可作为早期诊断维生素 A 缺乏的依据。", "correct": true },
{ "question": "\"红细胞生成缺铁期\"属于体内缺铁的第三个阶段。", "correct": false },
{ "question": "《中国居民膳食指南》是膳食营养素摄入量结果分析和评价的主要依据。", "correct": false },
{ "question": "记账法的主要优点是所用时间短，无需对调查者进行严格培训，就能得到个体的膳食摄入状况。", "correct": false },
{ "question": "膳食账目是记账法的基础，要求被调单位的伙食账目完善，数据可靠。", "correct": true },
{ "question": "乙醇含量<0.5%的饮料酒类属于豁免强制标示营养标签的预包装食品范围。", "correct": false },
{ "question": "植物性食品卫生要求应建立完善的可追溯体系和召回制度，确保食品存在不可接受的食品安全风险时，能进行追溯并能及时、完全的召回不合格批次的产品，并报告相关部门。", "correct": false },
{ "question": "高血脂症主要根据血浆(清) 总胆固醇、甘油三醋水平和高密度脂蛋白浓度进行诊断。", "correct": false },
{ "question": "社区居民营养与健康资料的收集途径不包含邮寄。", "correct": true },
{ "question": "无论作为独立的健康问题，还是作为其他健康问题的影响因素，运用健康教育与健康促进的理论和方法改变人们的膳食行为是必要的，而且是可行有效的。", "correct": true },
{ "question": "《老年人膳食指南 (2022 版) 》建议老年人主动足量饮水，每天饮水量达到 2300-2500ml。", "correct": false },
{ "question": "孕妇补充叶酸的最佳时间是孕后三个月内。", "correct": false },
{ "question": "膳食营养素素参考摄入量 (DRIs)的应用包括评价膳食和计划膳食两个方面，在评价膳食工作中，用它作为一个尺度，来衡量人们实际摄入的营养素量是否合适。", "correct": true },
{ "question": "大多数蛋白质含氮量相当接近，平均为 16%，折算系数为 6.25，其计算公式 : 蛋白质的百分含量(g/%) =每克中含氮量 (g)÷6.25x100%。", "correct": false },
{ "question": "学龄前儿童 3~6 岁时，脑组织达成人 86%~92%运动转为由大脑皮质中枢调节。", "correct": false },
{ "question": "胰液中有机物成分中最重要的是碳酸氢盐，其主要作用是中和进入十二指肠的胃酸，使肠黏膜免受胃酸的侵蚀。", "correct": false },
{ "question": "正常情况下，机体通过特异性免疫防御体系，保护机体免受外源性病原体的侵害。", "correct": false },
{ "question": "社会主义道德的核心是为人民服务。", "correct": true },
{ "question": "合理营养是通过合理搭配膳食和合理烹调来实现的。", "correct": true },
{ "question": "佝偻病的表现主要是神经精神症状和骨骼的变化，常见于 5 岁以内的小儿，3 岁内最多见。", "correct": false },
{ "question": "粪便可用于测定人体蛋白质的需要量、研究人体矿物质的需要量。", "correct": true },
{ "question": "血液和血浆及血清都需要采血后立即分离。", "correct": false },
{ "question": "称重记账法是称重法和记账法相结合的一种膳食调查方法。", "correct": true },
{ "question": "如果被调查单位人员的劳动强度、性别、年龄等组成不同，我们可以用人数的平均值作为每人每日营养素摄入水平。", "correct": false },
{ "question": "不同品种的粮豆都有固有的色泽及气味，有异味时可通过高温加热后食用，霉变的不能食用。", "correct": false },
{ "question": "婴幼儿使用的配方食品中的营养成分对婴幼儿的生长和发育都是必需的，其能量和营养成分能满足 2 岁以下婴幼儿所有的营养需要。", "correct": false },
{ "question": "人群中个体对某营养素的推荐摄入量和需要量都彼此不相同。", "correct": false },
{ "question": "食物在大肠内停留的时间较长,一般是 3~8h,为充分吸收提供了充裕的时间。", "correct": false },
{ "question": "公共营养师应勤奋好学、刻苦钻研、不断进取努力提高有关膳食营养和人群健康的专业知识和技能水平。", "correct": true }
];

// 打乱题目顺序的函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // 交换位置
    }
}

// 打乱题库中的题目顺序
shuffleArray(questions);

let currentQuestionIndex = 0;

const questionText = document.getElementById('questionText');
const resultContainer = document.getElementById('resultContainer');
const btnTrue = document.getElementById('btnTrue');
const btnFalse = document.getElementById('btnFalse');
const nextButton = document.getElementById('nextButton');

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        resultContainer.textContent = "恭喜你，已经完成所有题目！";
        resultContainer.style.color = 'blue';  // 设置完成题目的颜色为蓝色
        nextButton.style.display = "none";  // 隐藏下一题按钮
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    resultContainer.textContent = "";
    nextButton.style.display = "none";  // 隐藏下一题按钮
}

function checkAnswer(isTrue) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correct;

    if (isTrue === correctAnswer) {
        resultContainer.textContent = "回答正确！";
        resultContainer.style.color = 'green';  // 正确答案显示为绿色
    } else {
        resultContainer.textContent = `回答错误！正确答案是：${correctAnswer ? '对' : '错'}`;
        resultContainer.style.color = 'red';  // 错误答案显示为红色
    }

    nextButton.style.display = "inline-block"; // 显示下一题按钮
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

btnTrue.addEventListener('click', () => {
    checkAnswer(true);
});

btnFalse.addEventListener('click', () => {
    checkAnswer(false);
});

nextButton.addEventListener('click', nextQuestion);

// 初始加载第一题
loadQuestion();
