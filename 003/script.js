const questions = [
{ "question": "食品生产企业对其生产食品的安全负责。", "correct": true },
{ "question": "任何组织或者个人有权举报食品安全违法行为。", "correct": true },
{ "question": "食品安全标准是推荐性的标准，企业可以根据需要自愿采纳。", "correct": false },
{ "question": "国家鼓励食品生产企业制定严于食品安全国家标准或者地方标准的企业标准，在本企业适用，并报省、自治区、直辖市人民政府卫生行政部门备案。", "correct": true },
{ "question": "食品生产企业应当确保其生产活动符合相应的食品安全标准，如《食品安全国家标准 食品生产通用卫生规范》（GB 14881-2013）。", "correct": true },
{ "question": "可以在贮存食品原料的场所内存放个人生活物品。", "correct": false },
{ "question": "食品生产企业应具有与生产的食品品种、数量相适应的生产设备或者设施，有相应的消毒、更衣、盥洗、采光、照明、通风、防腐、防尘、防蝇、防鼠、防虫、洗涤以及处理废水、存放垃圾和废弃物的设备或者设施。", "correct": true },
{ "question": "食品生产企业的食品安全专业技术人员、食品安全管理人员须为专职，不得为兼职。", "correct": false },
{ "question": "为了便于成品运输，宜将产品包装间设置成与外界直接相通的形式。", "correct": false },
{ "question": "为便于内包装材料的传递，食品生产企业可以将内包装材料库房与内包装车间之间传递通道上的通行门拆除。", "correct": false },
{ "question": "食品生产企业应当具有合理的设备布局和工艺流程，防止待加工食品与直接入口食品、原料与成品交叉污染，避免食品接触有毒物、不洁物。", "correct": true },
{ "question": "贮存、运输和装卸食品的容器、工具和设备应当安全、无害，保持清洁，防止食品污染，并符合保证食品安全所需的温度、湿度等特殊要求，不得将食品与有毒、有害物品一同贮存、运输。", "correct": true },
{ "question": "食品生产人员应当保持个人卫生，生产食品时，应当将手洗净，穿戴清洁的工作衣、帽。", "correct": true },
{ "question": "食品生产人员进入生产车间前应当将手洗净，是否需要穿戴清洁的工作衣、帽可由企业自行要求。", "correct": false },
{ "question": "食品生产用水应当符合国家规定的生活饮用水卫生标准。", "correct": true },
{ "question": "食品生产中使用的洗涤剂、消毒剂应当对人体安全、无害。", "correct": false },
{ "question": "食品生产企业可对市场上滞销的产品进行回收，并以此为原料生产新的产品。", "correct": false },
{ "question": "为了避免浪费，食品生产企业可以使用过期的冷冻肉品加工成肉饼。", "correct": false },
{ "question": "某食品生产企业实际完成销售包装的时间为2018年1月10日，根据销售需要，产品可以在2018年3月6日出库时标注当天为生产日期。", "correct": false },
{ "question": "禁止生产无标签的预包装食品，但生产的食品添加剂有无标签没有强制要求。", "correct": false },
{ "question": "从事食品生产，应当依法取得食品生产许可。", "correct": true },
{ "question": "按照传统既是食品又是中药材的物质目录由国务院卫生行政部门会同国务院食品安全监督管理部门制定、公布。食品中不得添加按照传统既是食品又是中药材的物质。", "correct": false },
{ "question": "生产的食品中可以适当添加药品，以增加食品治疗功能。", "correct": false },
{ "question": "食品添加剂可以凭经验、凭感觉添加。", "correct": false },
{ "question": "食品生产企业应当按照食品安全国家标准使用食品添加剂。", "correct": true },
{ "question": "所有食品生产企业必须留存生产信息，建立食品安全追溯体系，保证食品可追溯。国家鼓励食品生产企业采用信息化手段实现食品可追溯。", "correct": true },
{ "question": "国家不鼓励食品生产企业参加食品安全责任保险。", "correct": false },
{ "question": "食品生产企业应当配备食品安全管理人员，加强对其培训和考试。经考试不具备食品安全管理能力的，不得上岗。", "correct": true },
{ "question": "从事接触直接入口食品工作的食品生产人员应当每两年进行一次健康检查，取得健康证明后方可上岗工作。", "correct": false },
{ "question": "从事接触直接入口食品工作的食品生产人员健康证过期后，可继续从事食品生产活动，待日后有时间进行健康体检，取得健康证明即可。", "correct": false },
{ "question": "食品生产企业应当就原料采购、原料验收、投料等原料控制事项制定并实施控制要求，以保证所生产的食品符合食品安全标准。", "correct": true },
{ "question": "食品生产企业应当就所生产食品的运输和交付控制方面制定并实施控制要求，以保证所生产的食品符合食品安全标准。", "correct": true },
{ "question": "食品生产企业可将日常监督检查结果作为食品安全自查结果。", "correct": false },
{ "question": "某茶叶公司的原材料茶青均使用自家茶山所产茶青，因此不需要对茶青进行进货查验或检验。", "correct": false },
{ "question": "某面包厂的进货查验记录中记录了原料鸡蛋的生产日期、保质期等信息，可以不记录进货日期。", "correct": false },
{ "question": "某食品生产企业出具了出厂产品自检合格报告后，可以不留存相对应的原始检验记录。", "correct": false },
{ "question": "某糕点生产企业为保证产品新鲜，可将刚烘焙好未经检验的产品运输出厂进行销售。", "correct": false },
{ "question": "食品生产企业发现其生产的食品不符合食品安全标准或者有证据证明可能危害人体健康的，应当立即停止生产，召回已经上市销售的食品，通知相关生产经营者和消费者，并记录召回和通知情况。", "correct": true },
{ "question": "食品生产企业召回已经上市销售的食品，无需通知相关生产经营者和消费者。", "correct": false },
{ "question": "食品生产企业对因标签、标志或者说明书不符合食品安全标准而被召回的食品只能采取销毁措施。", "correct": false },
{ "question": "食品生产企业可以先对召回的食品进行销毁，再向相关食品安全监督管理部门报告时间、地点。", "correct": false },
{ "question": "食品添加剂应当有标签、说明书和包装，并在标签上载明“食品添加剂”字样。", "correct": true },
{ "question": "某枣汁饮料标签上可标示该产品可以用于预防贫血。", "correct": false },
{ "question": "某酒厂新生产一批配制酒，可以在标签上标示为“通络活血酒”。", "correct": false },
{ "question": "某食品生产企业在其产品中加入了山药、大枣等按传统既是食品又是中药材的物质，因此可在标签上标识该产品具有补气补血的功效。", "correct": false },
{ "question": "对依照《中华人民共和国食品安全法》规定实施的检验结论有异议的，食品生产企业可自行选择复检机构进行复检。", "correct": false },
{ "question": "食品生产企业应委托符合《中华人民共和国食品安全法》规定的食品检验机构对所生产的食品进行检验，不可自行进行检验。", "correct": false },
{ "question": "进口的食品、食品添加剂、食品相关产品符合原产国家或地区的标准即可。", "correct": false },
{ "question": "食品生产企业应当制定食品安全事故处置方案，定期检查本企业各项食品安全防范措施的落实情况，及时消除事故隐患。", "correct": true },
{ "question": "为应对食品安全监督管理部门对食品安全事故的调查处理，某食品生产企业用编造好的记录替代了原始记录。", "correct": false },
{ "question": "根据《中华人民共和国食品安全法》，任何单位或者个人不得阻挠、干涉食品安全事故的调查处理。", "correct": true },
{ "question": "某食品生产企业生产过程中存在食品安全隐患，未及时采取措施消除，食品安全监督管理部门可以对该企业法定代表人或者主要负责人进行责任约谈。责任约谈情况和整改情况应当纳入该企业食品安全信用档案。", "correct": true },
{ "question": "任何单位和个人不得编造、散布虚假食品安全信息。", "correct": true },
{ "question": "某食品生产企业2017年被吊销许可证，该企业在2020年可以重新申请食品生产许可。", "correct": false },
{ "question": "某食品生产企业2017年被吊销许可证，该企业法定代表人在2020年可以从事食品生产管理工作、担任食品生产企业食品安全管理人员。", "correct": false },
{ "question": "王某因食品安全犯罪被判处有期徒刑，其五年后可从事食品生产管理工作，也可担任食品生产企业食品安全管理人员。", "correct": false },
{ "question": "因购买到不符合食品安全标准的食品而受到损害的消费者，只能向销售该食品的经营者要求赔偿损失，而不能直接向生产者要求赔偿损失。", "correct": false },
{ "question": "某酸奶生产企业接到消费者赔偿要求，经分析可能是经营环节保存不当造成酸奶变质。该生产企业可不先行赔付，要求消费者直接向销售该酸奶的超市索赔。", "correct": false },
{ "question": "根据《食品安全国家标准 食品生产通用卫生规范》（GB 14881-2013），分隔是指通过在物品、设施、区域之间留有一定空间，并不需要通过设置物理阻断的方式进行隔离。", "correct": false },
{ "question": "食品生产企业厂区不应选择对食品有显着污染的区域，如某地对食品安全和食品宜食用性存在明显的不利影响，且无法通过采取措施加以改善，应避免在该地址建厂。", "correct": true },
{ "question": "食品生产企业厂房和车间的内部设计和布局应满足食品卫生操作要求，避免食品生产中发生交叉污染。", "correct": true },
{ "question": "一般作业区应与清洁作业区分离。", "correct": false },
{ "question": "为便于人员操作，检验室可未经分隔，直接设于生产区域内。", "correct": false },
{ "question": "食品生产企业在生产车间屋顶内层喷涂涂料作为顶棚，应使用无毒、无味、防霉、不易脱落、易于清洁的涂料。", "correct": true },
{ "question": "蒸汽、水、电等配件管路应尽量避免设置于暴露食品的上方，如确需设置，应有能防止灰尘散落及水滴掉落的装置或措施。", "correct": true },
{ "question": "墙面、隔断应使用无毒、无味的防渗透材料建造，在操作高度范围内的墙面应光滑、不易积累污垢且易于清洁。", "correct": true },
{ "question": "清洁作业区的对外出入口可装设能自动关闭的门。", "correct": true },
{ "question": "排水系统入口应安装带水封的地漏等装置，以防止固体废弃物进入及浊气逸出。", "correct": true },
{ "question": "室内排水的流向应由清洁程度要求低的区域流向清洁程度要求高的区域，且应有防止逆流的设计。", "correct": false },
{ "question": "不同清洁要求的同一设备不同部位应分开清洁，并使用不同的清洁工器具。", "correct": true },
{ "question": "食品生产场所或生产车间入口处应设置更衣室，为节约空间，工作服可与个人服装混放。", "correct": false },
{ "question": "卫生间可与食品生产车间直接连通。", "correct": false },
{ "question": "厂房内应有充足的自然采光或人工照明，光泽和亮度应能满足生产和操作需要，光源应使食品呈现真实的颜色。", "correct": true },
{ "question": "原料、半成品、成品、包装材料等应依据性质的不同分设贮存场所、或分区域码放，并有明确标识，防止交叉污染。", "correct": true },
{ "question": "食品原料等贮存物品不可直接放置在地面，但可靠墙放置。", "correct": false },
{ "question": "仓库内的贮存物品应与墙壁、地面保持适当距离，以利于空气流通及物品搬运。", "correct": true },
{ "question": "根据《食品安全国家标准 食品生产通用卫生规范》（GB 14881-2013），清洁剂、消毒剂、杀虫剂等物质应与原料、成品、包装材料等分离放置。", "correct": false },
{ "question": "食品生产企业应配备与生产能力相适应的生产设备，并按工艺流程有序排列，避免引起交叉污染。", "correct": true },
{ "question": "用于食品生产监控的温度计、压力表应定期校准、维护。", "correct": true },
{ "question": "食品生产企业生产线监控应当避免使用水银温度计，以免破损后造成玻璃异物污染以及汞化学污染。", "correct": true },
{ "question": "食品生产企业应建立设备保养和维修制度，加强设备的日常维护和保养。", "correct": true },
{ "question": "清洁消毒前后的食品生产设备和工器具应分开放置妥善保管。", "correct": true },
{ "question": "食品加工人员应定期对生产、包装、贮存等设备及工器具、生产用管道、裸露食品接触表面等进行清洁消毒。", "correct": true },
{ "question": "食品加工人员取得健康证明后无需卫生培训可直接上岗。", "correct": false },
{ "question": "食品生产企业一旦发现患有痢疾、甲型病毒性肝炎、戊型病毒性肝炎等疾病的员工，应立即开除。", "correct": false },
{ "question": "食品加工人员操作中不小心切到手指造成明显皮肤损伤，经包扎可以继续在配料岗位工作。", "correct": false },
{ "question": "食品加工人员进入作业区域不应佩戴饰物，但可佩戴手表。", "correct": false },
{ "question": "食品加工人员个人使用的水杯可以直接放在生产车间操作台上。", "correct": false },
{ "question": "食品加工人员工作过程中，上厕所后继续从事食品生产活动应洗手，可不用再次消毒。", "correct": false },
{ "question": "非食品加工人员不得进入食品生产场所，特殊情况下进入时应遵守和食品加工人员同样的卫生要求。", "correct": true },
{ "question": "食品生产车间应设置纱帘、纱网、防鼠板、防蝇灯等，防止鼠类昆虫等侵入。", "correct": true },
{ "question": "食品生产企业应制定废弃物存放和清除制度，定期清除废弃物，对于易腐败的废弃物应尽快清除。", "correct": true },
{ "question": "食品加工人员可穿着工作服或者个人服装进入作业区域。", "correct": false },
{ "question": "食品生产企业应建立食品原料、食品添加剂和食品相关产品的采购、验收、运输和贮存管理制度。", "correct": true },
{ "question": "食品生产企业若发现验收不合格的食品原料，应在指定区域与合格品分开放置，做好明显标记。", "correct": true },
{ "question": "食品原料不得与有毒、有害物品同时装运，避免污染食品原料。", "correct": true },
{ "question": "食品原料仓库应设专人管理，定期检查质量和卫生情况，及时清理变质或超过保质期的食品原料。", "correct": true },
{ "question": "食品原料、食品添加剂和食品包装材料等进入生产区域时应有一定的缓冲区域或外包装清洁措施，以降低污染风险。", "correct": true },
{ "question": "鼓励采用HACCP对生产过程进行食品安全控制。", "correct": true },
{ "question": "食品加工过程的微生物监控应包括致病菌监控和指示菌监控。", "correct": true },
{ "question": "食品生产企业不得在食品加工中添加食品添加剂以外的非食用化学物质和其他可能危害人体健康的物质。", "correct": true },
{ "question": "应急情况下，可临时使用食用油脂或工业油脂对生产设备上直接接触食品的活动部件进行润滑。", "correct": false },
{ "question": "食品生产企业应建立清洁剂、消毒剂等化学品的使用制度，并做好使用记录。", "correct": true },
{ "question": "食品生产企业应采取设备维护、加工过程监督等措施，降低食品受到异物污染的风险。", "correct": true },
{ "question": "食品生产企业应采取设置筛网、捕集器、磁铁、金属检查器等有效措施，降低金属或其他异物污染食品的风险。", "correct": true },
{ "question": "食品生产企业使用包装材料时应核对标识，避免误用，如实记录包装材料的使用情况。", "correct": true },
{ "question": "不具备自行检验能力的食品生产企业，应委托具备相应资质的食品检验机构对产品进行检验。婴幼儿配方乳粉出厂应由生产企业全项目逐批自行检验，不得委托检验。", "correct": true },
{ "question": "食品生产企业自行检验应具备与所检项目适应的检验室和检验能力。", "correct": true },
{ "question": "食品生产企业对新购买的分析天平只需要进行一次检定。", "correct": false },
{ "question": "食品生产企业检验室应妥善保存检验报告和原始记录，无需产品留样。", "correct": false },
{ "question": "同一食品品种不同包装的产品，不受包装规格和包装形式影响的检验项目可以一并检验。", "correct": true },
{ "question": "贮存、运输和装卸食品的容器、工器具和设备应安全、无害，保持清洁，降低食品污染的风险。", "correct": true },
{ "question": "食品生产企业应对食品加工人员以及相关岗位的从业人员进行相应的食品安全知识培训。", "correct": true },
{ "question": "食品生产企业应根据食品生产不同岗位的实际需求，制定和实施食品安全年度培训计划并进行考试，做好培训记录。", "correct": true },
{ "question": "当食品安全相关的法律法规标准更新时，应及时对员工开展培训。", "correct": true },
{ "question": "食品原料、食品添加剂和食品包装材料等食品相关产品进货查验记录、食品出厂检验记录只需要记录人员签名。", "correct": false },
{ "question": "食品生产企业应建立客户投诉处理机制，对客户提出的书面或口头意见、投诉，企业相关管理部门应作记录并查找原因，妥善处理。", "correct": true },
{ "question": "食品生产企业应确保各相关场所使用的文件均为有效版本。", "correct": true },
{ "question": "文件可使用纸质记录，鼓励采用先进技术手段（如电子计算机信息系统），进行记录和文件管理。", "correct": true },
{ "question": "某食品生产企业生产糕点及糖果，依据《食品生产许可管理办法》，需要申请两个食品生产许可证。", "correct": false },
{ "question": "食品生产许可实行一企一证原则，同一个食品生产者从事食品生产活动，应当取得一个食品生产许可证。", "correct": true },
{ "question": "食品生产许可证发证日期为许可决定作出的日期。", "correct": true },
{ "question": "李某新办一面粉生产企业，可借用他人的食品生产许可证进行生产。", "correct": false },
{ "question": "生产场所迁出原发证的食品安全监督管理部门管辖范围的，其生产许可证无需重新申请。", "correct": false },
{ "question": "食品生产企业食品生产许可证变更后，有效期必须自变更之日起重新计算。", "correct": false },
{ "question": "被许可人以欺骗、贿赂等不正当手段取得食品生产许可的，由原发证的市场监督管理部门撤销许可，并处1万元以上3万元以下罚款。", "correct": true },
{ "question": "食品生产企业未按规定在生产场所的显着位置悬挂或者摆放食品生产许可证的，由县级以上地方市场监督管理部门责令改正；拒不改正的，给予警告。", "correct": true },
{ "question": "食品安全监督抽检的样品、抽样文书及相关资料可由被抽样食品生产企业自行送样和寄送文书。", "correct": false },
{ "question": "食品安全监督抽检的抽样检验结论显示微生物指标超标的，复检机构可以复检。", "correct": false },
{ "question": "鼓励食品生产企业选择食品安全第三方专业机构对自身的食品生产管理体系进行评价，评价结果作为日常监督检查的参考。", "correct": true },
{ "question": "食品生产企业应当按照监督检查人员要求，在现场检查、询问和抽样检验等文书上签字或者盖章。", "correct": true },
{ "question": "日常监督检查结果为基本符合的食品生产企业应按期进行整改，并将整改情况报告食品安全监督管理部门。", "correct": true },
{ "question": "日常监督检查结果为不符合，有发生食品安全事故潜在风险的，食品生产企业应在三日内停止食品生产活动。", "correct": false },
{ "question": "食品生产企业应当配合食品安全监督管理部门的风险分级管理工作，不得拒绝、逃避或者阻碍。", "correct": true },
{ "question": "根据《食品生产经营风险分级管理办法》，食品生产企业风险等级一经评定，无法调整。", "correct": false },
{ "question": "根据《食品生产经营风险分级管理办法》，食品生产企业风险等级分为好、中、差三个等级。", "correct": false },
{ "question": "根据《食品生产经营风险分级管理办法》，食品生产企业应当根据风险分级结果，改进和提高生产控制水平，加强落实食品安全主体责任。", "correct": true },
{ "question": "预包装食品标签不应以暗示性的语言、图形、符号，使消费者将购买的食品或食品的某一性质与另一产品混淆。", "correct": true },
{ "question": "一款面包产品，可以取名为“酸奶草莓”。", "correct": false },
{ "question": "无国家标准、行业标准或地方标准规定的名称时，应使用不使消费者误解或混淆的常用名称或通俗名称。", "correct": true },
{ "question": "在食品加工过程中已挥发的水或其他挥发性配料必须在配料表中标示。", "correct": false },
{ "question": "若同一预包装内含有多个单件预包装食品时，大包装可不标示净含量和规格。", "correct": false },
{ "question": "预包装食品营养标签中的核心营养素包括蛋白质、脂肪、碳水化合物，不包括钠。", "correct": false },
{ "question": "预包装食品营养标签如同时使用外文标示，其内容应当与中文相对应，外文字号可以大于中文字号。", "correct": false },
{ "question": "预包装食品营养标签应在大包装上统一进行标示，向消费者提供的最小销售单元的包装上可不标示。", "correct": false },
{ "question": "对除能量和核心营养素外的其他营养成分进行营养声称或营养成分功能声称时，在营养成分表中应标示出该营养成分的含量及其占营养素参考值（NRV）的百分比。", "correct": true },
{ "question": "食品生产企业可以制定低于食品安全国家标准或者地方标准要求的企业标准。", "correct": false },
{ "question": "食品生产者应当建立食品安全追溯体系，保证食品可追溯。", "correct": true },
{ "question": "食品生产企业的主要负责人对本企业的食品安全工作全面负责，建立并落实本企业的食品安全责任制。", "correct": true },
{ "question": "在对食品安全管理人员培训后，食品生产企业可根据情况确定是否对其进行考核。", "correct": false },
{ "question": "食品生产企业的主要负责人要加强供货者管理、进货查验和出厂检验、生产过程控制、食品安全自查等工作，食品安全管理人员应当协助企业主要负责人做好食品安全管理工作。", "correct": true },
{ "question": "食品、食品添加剂生产者委托生产食品、食品添加剂的，可不对委托生产的食品、食品添加剂的安全负责。", "correct": false },
{ "question": "食品安全管理人员应当掌握与其岗位相适应的食品安全法律、法规、标准和专业知识，具备食品安全管理能力。", "correct": true },
{ "question": "食品安全监督管理部门应当对企业食品安全管理人员进行随机监督抽查考核。", "correct": true },
{ "question": "对食品进行辐照加工，应按照食品安全国家标准的要求对辐照加工食品进行检验和标注。", "correct": true },
{ "question": "贮存、运输对温度、湿度等有特殊要求的食品，应当具备保温、冷藏或者冷冻等设备设施，并保持有效运行。", "correct": true },
{ "question": "食品生产企业不能委托其他单位贮存、运输食品。", "correct": false },
{ "question": "食品生产者委托贮存、运输食品的，应当对受托方的食品安全保障能力进行审核。", "correct": true },
{ "question": "某普通食品中添加了大枣，该企业不得声称该产品具有治疗功能，但可以声称具有保健功能。", "correct": false },
{ "question": "食品生产者生产的食品符合食品安全标准但不符合食品所标注的企业标准规定的食品安全指标的，由县级以上人民政府食品安全监督管理部门给予警告，并责令食品生产企业改正。", "correct": true },
{ "question": "食品生产者发现其生产的食品不符合食品安全标准或者有证据证明可能危害人体健康的，按照《食品安全法》相关规定停止生产、实施食品召回，或者采取其他有效措施减轻或者消除食品安全风险，未造成危害后果的，可以从轻或者减轻处罚。", "correct": true },
{ "question": "食品生产者阻碍食品安全监督管理等部门工作人员依法执行职务，构成违反治安管理行为的，由公安机关依法给予治安管理处罚。", "correct": true },
{ "question": "食品生产企业收到食品安全监督抽检不合格检验结论后，应当立即采取封存不合格食品，暂停生产、经营不合格食品，通知相关生产经营者和消费者，召回已上市销售的不合格食品等风险控制措施，排查不合格原因并进行整改。在复检和异议期间，食品生产企业可先停止履行以上义务。", "correct": false },
{ "question": "食盐生产者应当依照法律、法规、规章和食品安全标准从事生产活动，对食盐的质量安全负责。", "correct": true },
{ "question": "从事食盐生产活动，不需要取得食品生产许可。", "correct": false },
{ "question": "食盐的生产许可工作，食盐生产企业所在地的县级市场监督管理部门负责。", "correct": false },
{ "question": "食盐生产者可以利用井矿盐卤水熬制食盐。", "correct": false },
{ "question": "食盐生产者不得生产掺假掺杂、混有异物的食盐。", "correct": true },
{ "question": "加碘食盐应当有明显标识并标明碘的含量。", "correct": true },
{ "question": "未加碘食盐的标签无需标注“未加碘”字样。", "correct": false },
{ "question": "食盐与工业盐的纯度相差不大，可按照工业盐的有关要求生产，无需单独建立健全并落实食品安全管理制度。", "correct": false },
{ "question": "食盐生产者应当建立食盐质量安全追溯体系，保证食盐质量安全可追溯。", "correct": true },
{ "question": "鼓励食盐生产者采用信息化手段采集、留存生产信息。", "correct": true },
{ "question": "食盐生产者应当建立食品安全自查制度，定期对食盐质量安全状况进行检查评价。", "correct": true },
{ "question": "食盐生产条件发生变化，不再符合食品安全要求的，食盐生产者应当立即采取整改措施。", "correct": true },
{ "question": "有发生食品安全事故潜在风险的，食盐生产者应当立即停止食盐生产活动，并向所在地县级市场监督管理部门报告。", "correct": true },
{ "question": "食盐生产者发现其生产的食盐不符合食品安全标准或者有证据证明可能危害人体健康的，可边生产边整改。", "correct": false },
{ "question": "遇有食品安全突发事故后，食盐生产企业应当立即建立食品安全应急管理和突发事故报告制度，成立应急处置机构，制定应急处置方案。", "correct": false },
{ "question": "发生食盐质量安全事故，食盐生产者应当立即采取措施，防止事故扩大，按照规定及时报告。", "correct": true },
{ "question": "县级以上市场监督管理部门对食盐生产者实施的行政处罚等信息，会向社会公示，但不会归集至国家企业信用信息公示系统。", "correct": false }
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
