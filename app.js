const dimensions = {
  data: "数据感",
  break: "突破欲",
  result: "结果压强",
  craft: "专业深潜",
};

const companies = [
  {
    id: "dji",
    company: "DJI",
    name: "真理追求者",
    subtitle: "把世界当参数表的人",
    quote: "你不是在上班，你是在给世界调参。",
    color: "#2b6ef3",
    motifs: ["参数", "天空", "实验室"],
    scores: { data: 95, break: 70, result: 75, craft: 95 },
    definition:
      "你相信问题一定有更准确的解法，讨厌差不多、先上线、回头再看这类模糊咒语。",
    analysis:
      "你的工作方式像一间灯永远亮着的实验室。别人看项目，你先看变量；别人看结论，你先追证据链。你并不是为了抬杠而较真，你只是本能地知道，一个没有被定义清楚的问题，后面会用十倍时间回来收债。",
    behaviors: [
      "会在评审会上追问口径、边界和异常值。",
      "对一句“差不多”产生生理性警觉。",
      "宁愿慢半拍，也不想把一个不靠谱的东西包装成胜利。",
    ],
    strengths: "判断稳，专业可信，能把混乱问题拆到可验证、可复盘、可迭代。",
    pains:
      "你容易把普通周会开成论文答辩。别人觉得你在卡进度，你觉得他们在让问题裸奔。",
    environment: "适合硬核产品、技术驱动、长期口碑比短期声量更重要的团队。",
    nemesis: "最怕只要故事不要证据、只看气氛不看变量的上级或同事。",
    survival:
      "继续追求真理，但别把每一次沟通都升级成终局审判。先问清这件事到底值不值得调参到天亮。",
  },
  {
    id: "bytedance",
    company: "字节",
    name: "增长压强体",
    subtitle: "把人生也做成实验组的人",
    quote: "你不是焦虑，你只是把自己放进了灰度发布。",
    color: "#e3483e",
    motifs: ["AB", "OKR", "节奏"],
    scores: { data: 88, break: 92, result: 96, craft: 62 },
    definition:
      "你对结果敏感，对反馈上瘾，对原地踏步过敏，像一个随时准备开新实验的增长机器。",
    analysis:
      "你很难接受“就这样吧”。在你这里，方案不是写完就结束，而是开始进入观测期。你会追数据、拆漏斗、压节奏，也会在每次复盘后默默给自己加一个新版本号。你不是没有情绪，只是情绪经常被你塞进待办列表。",
    behaviors: [
      "听到“先看看”会立刻追问看什么、怎么看、多久看。",
      "比起流程漂亮，你更在意指标有没有真的动。",
      "别人还在讨论方向，你已经开始拆第一轮实验。",
    ],
    strengths: "反应快，执行强，能把模糊目标压成可跑起来的动作。",
    pains:
      "你容易把所有事都活成冲刺。项目没爆，你怀疑人生；项目爆了，你开始怀疑还能不能更爆。",
    environment: "适合增长、内容、商业化、推荐策略、快节奏创新团队。",
    nemesis: "最怕低反馈、慢决策、只开会不落地的组织环境。",
    survival:
      "允许自己偶尔不迭代。不是每个周末都需要变成一个新版本，你也不是永远在线的后台任务。",
  },
  {
    id: "popmart",
    company: "泡泡玛特",
    name: "情绪造梦师",
    subtitle: "把需求包装成心动理由的人",
    quote: "你卖的不是功能，是大家愿意为之上头的那一秒。",
    color: "#f7c948",
    motifs: ["盲盒", "心动", "展柜"],
    scores: { data: 62, break: 80, result: 74, craft: 55 },
    definition:
      "你擅长捕捉人心里那些说不清但会买单的瞬间，把情绪做成可传播的产品。",
    analysis:
      "你不只是在做事，你在设计一种别人愿意靠近的感觉。你知道数据重要，但也知道有些决策来自眼睛亮起来的那一下。你的直觉不是玄学，而是长期观察审美、情绪、社交货币之后形成的雷达。",
    behaviors: [
      "会先问用户为什么心动，再问转化率为什么波动。",
      "对“没感觉”三个字非常敏感。",
      "能把一个普通卖点翻译成适合被分享的情绪入口。",
    ],
    strengths: "审美敏锐，包装能力强，懂用户情绪和内容传播。",
    pains:
      "你有时会被说不够理性，尤其当别人只想要表格，而你想解释人为什么会心动。",
    environment: "适合品牌、内容、用户增长、新消费、社区和创意型团队。",
    nemesis: "最怕只会问 ROI、看不见情绪价值、把所有创意都压成表格的人。",
    survival:
      "保留你的直觉，但给它配一条证据链。会做梦的人如果也会算账，就很难被会议带走。",
  },
  {
    id: "huawei",
    company: "华为",
    name: "高压闭环者",
    subtitle: "把不可能拆成责任田的人",
    quote: "你不是能扛，你是已经默认自己必须扛住。",
    color: "#e3483e",
    motifs: ["闭环", "战报", "攻坚"],
    scores: { data: 82, break: 72, result: 98, craft: 86 },
    definition: "你相信目标就是军令状，问题可以难，但不能没人负责。",
    analysis:
      "你的职场底层系统里写着两个字：闭环。你不一定喜欢高压，但你太知道失控的代价，所以会本能地把风险、责任和交付节点钉住。别人看你像卷，你知道自己只是在防止系统掉线。",
    behaviors: ["会追责任人和截止时间。", "遇到硬仗先拆路径，不先抱怨命苦。", "对没有 owner 的任务极度不信任。"],
    strengths: "抗压强，能打硬仗，复杂项目里很容易成为稳定中枢。",
    pains: "你经常把自己活成最后一道防线，久了会忘记人不是服务器。",
    environment: "适合重交付、重技术、重客户承诺的攻坚型团队。",
    nemesis: "最怕只喊愿景、不承担结果、把锅写进空气里的管理方式。",
    survival: "别把所有责任都捡回自己身上。闭环很重要，但你也需要给自己留一个出口。",
  },
  {
    id: "xiaomi",
    company: "小米",
    name: "性价比理想主义者",
    subtitle: "用有限资源做足够漂亮的事",
    quote: "你不是抠，你是在和浪费进行长期斗争。",
    color: "#ff7a1a",
    motifs: ["参数", "发布会", "性价比"],
    scores: { data: 72, break: 74, result: 82, craft: 60 },
    definition: "你擅长在资源有限的情况下找到最能打的解法。",
    analysis: "你有理想，但不迷信豪华配置。你会把目标拆成可落地的优先级，尽量让每一份投入都变成看得见的体验。别人说将就，你说这是工程化浪漫。",
    behaviors: ["习惯追问投入产出比。", "能把复杂方案压成用户真的会用的版本。", "对虚胖预算和无效排场不太买账。"],
    strengths: "务实、会取舍、懂用户感知，也懂资源边界。",
    pains: "你容易在理想和成本之间反复横跳，最后把自己变成预算会计兼产品经理。",
    environment: "适合硬件、消费产品、增长、平台型业务和资源约束明确的团队。",
    nemesis: "最怕只追高级感不算账，或者只谈降本不谈体验的人。",
    survival: "别每件事都追求极致性价比。有些情绪价值，也值得被列进预算。",
  },
  {
    id: "dreame",
    company: "追觅",
    name: "追追又觅觅",
    subtitle: "永远在找下一个更优解的人",
    quote: "你不是变来变去，你是在追一个还没出现的答案。",
    color: "#16a085",
    motifs: ["马达", "曲线", "迭代"],
    scores: { data: 80, break: 86, result: 88, craft: 84 },
    definition: "你对进步敏感，对停滞不安，愿意用迭代换确定性。",
    analysis: "你像一个持续工作的性能实验台。方案可以先跑，但跑完必须复盘；结果可以不错，但你总觉得还有更高转速。你不是没有耐心，你只是对更优解有点执念。",
    behaviors: ["会反复打磨指标和体验边角。", "不怕换路线，怕的是明知有问题还装没看见。", "很容易把自己卷进下一轮优化。"],
    strengths: "迭代能力强，执行快，能把产品从能用推到好用。",
    pains: "你会因为永远有下一版，而很难真正庆祝这一版。",
    environment: "适合硬科技、智能硬件、效率工具和快速迭代团队。",
    nemesis: "最怕把改进建议当找茬、把版本冻结当人生终点的人。",
    survival: "给自己设置一个停手机制。不是所有更优解都值得今晚追到。",
  },
  {
    id: "apple",
    company: "苹果",
    name: "体验洁癖者",
    subtitle: "连沉默的边角都要有秩序的人",
    quote: "你不是挑剔，你是看见了别人没看见的毛边。",
    color: "#111111",
    motifs: ["留白", "细节", "边角"],
    scores: { data: 86, break: 62, result: 76, craft: 94 },
    definition: "你对体验、秩序和完整度有近乎本能的要求。",
    analysis: "你很难对粗糙视而不见。一个按钮的位置、一段话的语气、一个流程的停顿，都可能被你看成产品人格的一部分。你不是为了优雅而优雅，你相信体验会在沉默处决定信任。",
    behaviors: ["会盯交互细节和表达一致性。", "对临时拼凑的方案容忍度很低。", "喜欢少而准，不喜欢多而乱。"],
    strengths: "审美稳定，标准高，能把产品做出信任感和完成度。",
    pains: "你容易被说慢、贵、讲究，而你觉得他们只是没听见系统在漏风。",
    environment: "适合体验驱动、品牌驱动、设计系统和高品质产品团队。",
    nemesis: "最怕一边喊高级，一边把每个页面都塞满入口的人。",
    survival: "有些毛边值得修，有些毛边只是上线前的灰尘。学会区分，否则你会被细节反噬。",
  },
  {
    id: "nio",
    company: "蔚来",
    name: "用户情绪管家",
    subtitle: "把关系维护成长期资产的人",
    quote: "你不是服务意识强，你是连对方的失落都想接住。",
    color: "#2f6fb3",
    motifs: ["社区", "补能", "陪伴"],
    scores: { data: 58, break: 68, result: 66, craft: 54 },
    definition: "你擅长经营关系、回应感受，也愿意把用户体验当长期承诺。",
    analysis: "你看重的不只是事情做完，而是人有没有被照顾到。你会在项目里补上那些没人写进需求文档的情绪缝隙，也会因为一句反馈反复琢磨是不是哪里没接住。",
    behaviors: ["会主动安抚协作方的不确定感。", "比起冷冰冰交付，更在意体验是否完整。", "容易成为团队里的关系润滑剂。"],
    strengths: "共情强，服务意识好，适合做长期用户关系和社区信任。",
    pains: "你可能把别人的情绪也背在自己身上，最后累到像一个人形客服中心。",
    environment: "适合用户运营、社区、服务体验、品牌和长期客户关系团队。",
    nemesis: "最怕只看短期指标、把用户感受当噪音的人。",
    survival: "你可以接住别人，但不必替所有人落地。共情不是无限续杯。",
  },
  {
    id: "tesla",
    company: "特斯拉",
    name: "极限开荒者",
    subtitle: "先把边界撞开再写流程的人",
    quote: "你不是不怕风险，你是更怕原地等死。",
    color: "#cc1f2f",
    motifs: ["加速", "工厂", "火星"],
    scores: { data: 75, break: 98, result: 95, craft: 80 },
    definition: "你偏爱高难度目标和非常规路径，能在混乱中把事情往前撞。",
    analysis: "你对边界的第一反应不是接受，而是测试。规则可以有，但不能先于问题存在。你会在不确定里开路，也会因为速度太快把旁边的人吓出工伤级心率。",
    behaviors: ["遇到卡点会先找绕路方案。", "对慢吞吞的层层审批耐心有限。", "愿意为了突破承受高压和争议。"],
    strengths: "破局强，速度快，适合从 0 到 1 或危机攻坚。",
    pains: "你可能低估组织承压能力，把别人都带进你的极限测试场。",
    environment: "适合创新业务、硬科技攻坚、出海增长和强目标团队。",
    nemesis: "最怕把稳定当唯一目标、把流程当护身符的人。",
    survival: "冲可以，记得回头看看队友还在不在车上。",
  },
  {
    id: "tencent",
    company: "腾讯",
    name: "水系协同者",
    subtitle: "把关系和空间留到刚刚好的人",
    quote: "你不是慢，你是在等事情自己露出水面。",
    color: "#2b6ef3",
    motifs: ["水系", "连接", "生态"],
    scores: { data: 64, break: 45, result: 60, craft: 56 },
    definition: "你擅长在复杂关系里保留弹性，不轻易把话说死。",
    analysis: "你的优势不是硬冲，而是知道什么时候该让一让、绕一绕、等一等。你不喜欢无意义对抗，更愿意在系统里找空间，把不同人的利益和节奏慢慢调到能走下去。",
    behaviors: ["开会时会观察谁真正影响决策。", "不急着站队，也不轻易撕破脸。", "擅长把冲突包装成可继续协作的问题。"],
    strengths: "协同感强，关系判断稳，适合复杂组织和生态型业务。",
    pains: "你有时会被误解为不够锋利，甚至把自己的真实判断藏太久。",
    environment: "适合平台、社交、内容生态、合作伙伴关系和长期型业务。",
    nemesis: "最怕上来就掀桌、把所有事都变成输赢的人。",
    survival: "保留弹性是能力，但关键时刻也要把你的判断说出来。水也可以有方向。",
  },
  {
    id: "taobao-now",
    company: "淘宝闪购",
    name: "即时响应体",
    subtitle: "把需求从想要压缩到马上要的人",
    quote: "你不是急，你只是听见了用户说现在。",
    color: "#ff6a00",
    motifs: ["骑手", "货架", "倒计时"],
    scores: { data: 70, break: 86, result: 90, craft: 50 },
    definition: "你对即时反馈和交易效率敏感，擅长把复杂链路压短。",
    analysis: "你很懂一个道理：用户的耐心是有保质期的。你会盯链路、盯供给、盯响应速度，也会把模糊需求拆成能立刻发生的动作。你的淘宝系气质不是热闹，而是让选择、供给和履约尽快接上。",
    behaviors: ["喜欢把长流程拆成几个能马上推进的节点。", "对等待和断点很敏感。", "看到需求会先想供给、路径和转化。"],
    strengths: "商业反应快，链路意识强，能把需求做成可交易的系统。",
    pains: "你容易被实时反馈绑架，仿佛慢一点就会失去整个世界。",
    environment: "适合电商、即时零售、交易平台、运营增长和本地生活业务。",
    nemesis: "最怕只做概念不接履约、只讲品牌不看转化的人。",
    survival: "不是所有需求都要马上满足。有些马上，只是别人把焦虑转发给了你。",
  },
  {
    id: "meituan",
    company: "美团",
    name: "履约机器魂",
    subtitle: "把世界拆成路径、效率和准时到达的人",
    quote: "你不是没有感情，你只是先看这单能不能准时送达。",
    color: "#f7c948",
    motifs: ["路径", "骑手", "履约"],
    scores: { data: 84, break: 80, result: 96, craft: 70 },
    definition: "你在意系统能不能真正跑通，尤其在复杂约束下交付结果。",
    analysis: "你不迷信漂亮方案，因为你知道现场会教做人。你会把宏大的目标拆成路线、节点、成本和 SLA，在别人讲愿景时，你已经开始想哪里会堵、谁来兜底、异常怎么处理。",
    behaviors: ["会优先确认链路和责任边界。", "对“理论上可行”保持谨慎。", "能在复杂条件下找到最短可交付路径。"],
    strengths: "落地强，系统感好，适合把复杂业务做成稳定机器。",
    pains: "你可能太早进入执行细节，让创意还没长大就被履约压力按住。",
    environment: "适合本地生活、供应链、平台运营、策略和重交付业务。",
    nemesis: "最怕只会画大饼、不知道谁来送最后一公里的人。",
    survival: "效率很重要，但别把自己也当成一条可无限压缩的链路。",
  },
  {
    id: "loreal",
    company: "欧莱雅",
    name: "精致商业脑",
    subtitle: "把审美、货架和人心同时算进去的人",
    quote: "你不是爱包装，你是知道人会先被感觉说服。",
    color: "#a855f7",
    motifs: ["色号", "柜台", "趋势"],
    scores: { data: 62, break: 64, result: 72, craft: 56 },
    definition: "你擅长把品牌感、用户洞察和商业转化揉成一个顺滑故事。",
    analysis: "你知道世界不是只靠功能运转。名字、颜色、场景、话术、货架位置，每一个细节都可能改变用户的判断。你不是空谈审美，你是在把感受变成生意。",
    behaviors: ["会在意表达是否匹配人群心智。", "能把卖点翻译成用户愿意相信的理由。", "对粗糙包装和错位语气很敏感。"],
    strengths: "品牌感强，商业嗅觉好，擅长用户心智和内容包装。",
    pains: "你容易被纯指标派催到窒息，也可能被创意派嫌太商业。",
    environment: "适合品牌营销、内容电商、新消费、用户研究和渠道增长。",
    nemesis: "最怕只会说高级但卖不动，或只会促销但毁掉品牌的人。",
    survival: "精致不是目的，转化也不是全部。你要做的是让二者别互相谋杀。",
  },
  {
    id: "pdd",
    company: "拼多多",
    name: "极致结果党",
    subtitle: "把废话挤干只看增长的人",
    quote: "你不是没耐心，你只是对无效优雅免疫。",
    color: "#e3483e",
    motifs: ["低价", "裂变", "转化"],
    scores: { data: 78, break: 88, result: 98, craft: 58 },
    definition: "你对结果有近乎残酷的敏感度，愿意为了有效放弃漂亮姿势。",
    analysis: "你很少被宏大叙事感动。对你来说，东西有没有用、用户买不买、数据动不动，比表达是否体面更重要。你能在复杂噪音里抓住最硬的变量，也可能因此显得不太温柔。",
    behaviors: ["会快速识别哪个动作真能带来结果。", "不太吃精致但无效的方案。", "能在资源有限时打出惊人效率。"],
    strengths: "目标感极强，商业嗅觉直接，执行不绕弯。",
    pains: "你可能把过程体验压得太薄，让团队觉得自己像被指标追着跑。",
    environment: "适合增长、交易、供应链、下沉市场、效率导向业务。",
    nemesis: "最怕只讲格调、不讲转化、把问题包装成态度的人。",
    survival: "结果要赢，但别把所有关系都当成成本项。人也不是只会点击的漏斗。",
  },
  {
    id: "oppo",
    company: "OPPO",
    name: "稳态审美派",
    subtitle: "把可靠和好看都放进日常的人",
    quote: "你不是保守，你是不想让用户替你的冒险买单。",
    color: "#16a085",
    motifs: ["影像", "门店", "手感"],
    scores: { data: 64, break: 54, result: 70, craft: 72 },
    definition: "你偏爱稳定、可感知、能长期被使用的体验改进。",
    analysis: "你的做事方式不追求一夜爆炸，而是让产品和关系慢慢变得可靠。你在意手感、细节和用户真正用起来的舒适度，也愿意为稳定付出耐心。",
    behaviors: ["会优先保证体验别翻车。", "对过度激进的方案保持谨慎。", "擅长把改进做进日常细节里。"],
    strengths: "稳，细，用户感知好，适合长期产品和渠道协作。",
    pains: "你可能被快节奏团队嫌不够刺激，但你知道刺激不等于价值。",
    environment: "适合消费电子、渠道、影像体验、用户运营和成熟产品团队。",
    nemesis: "最怕为了声量牺牲基础体验的人。",
    survival: "稳定不是没有野心。只是偶尔也要让别人看见你在往哪里走。",
  },
  {
    id: "vivo",
    company: "VIVO",
    name: "安静打磨者",
    subtitle: "不吵，但一直把事情磨到能用的人",
    quote: "你不是没存在感，你是在把存在感做进细节里。",
    color: "#3c7cff",
    motifs: ["音质", "影像", "长期"],
    scores: { data: 62, break: 52, result: 68, craft: 70 },
    definition: "你不爱抢风头，但会稳定地把事情一点点磨好。",
    analysis: "你不太迷恋戏剧化表达，更相信持续的小改进。你能忍受漫长、重复、细碎的工作，也愿意把那些别人看不到的边角补齐。你不是慢热，你只是讨厌虚火。",
    behaviors: ["会默默修掉很多没人表扬的问题。", "不急着在会上赢，但会在交付里证明。", "更喜欢确定性和长期积累。"],
    strengths: "耐心强，稳定可靠，适合需要长期打磨和持续运营的事情。",
    pains: "你可能太不主动表达，导致功劳被归到空气里。",
    environment: "适合成熟产品、质量体验、运营支持、用户服务和长期项目。",
    nemesis: "最怕只会抢话、不会收尾、把存在感当交付的人。",
    survival: "安静可以，但不要隐身。你做过的事，也需要被看见。",
  },
];

const questions = [
  ["会议现场", "我更愿意在会前把证据链补齐，而不是现场靠表达把逻辑圆回来。", "data", 1, "craft", 0.25],
  ["会议现场", "当一个方案明显不靠谱但全场沉默时，我通常会直接指出关键风险。", "break", 1, "result", 0.2],
  ["会议现场", "如果讨论已经跑偏，我会先把目标重新写清楚，再继续听大家发挥。", "result", 1, "data", 0.25],
  ["会议现场", "我能接受一个看起来不完美但能快速验证的初版方案。", "craft", -1, "break", 0.25],
  ["会议现场", "开会时我更在意谁能拍板，而不是每个人有没有都表达一下。", "result", 1, "break", 0.2],
  ["会议现场", "遇到模糊需求，我会先问定义、边界、优先级，而不是先开干。", "data", 1, "craft", 0.25],
  ["会议现场", "我会为了保持协作气氛，暂时不把所有问题都摊开。", "break", -1, "result", -0.15],
  ["会议现场", "只要能推进，我不介意先用一个临时结论把会收住。", "craft", -1, "result", 0.25],
  ["会议现场", "当领导说“你简单讲讲”时，我脑子里已经开始自动生成三层结构。", "data", 1, "craft", 0.2],
  ["项目推进", "比起把流程做漂亮，我更在意这个项目最后有没有真实结果。", "result", 1, "break", 0.2],
  ["项目推进", "跨部门资源卡住时，我会先找关键人推进，而不是继续在群里礼貌等待。", "break", 1, "result", 0.25],
  ["项目推进", "我不太能忍受需求一直变，除非每次变化都有清楚理由。", "data", 1, "craft", 0.2],
  ["项目推进", "项目进入混乱期时，我会主动把责任人和截止时间重新钉一遍。", "result", 1, "data", 0.2],
  ["项目推进", "我愿意为了更好的长期体验，推迟一个短期看起来能交差的版本。", "craft", 1, "result", -0.15],
  ["项目推进", "如果有 60% 把握，我倾向先跑起来，再用反馈修。", "break", 1, "data", -0.15],
  ["项目推进", "我会下意识寻找项目里最可能拖垮全局的那个变量。", "data", 1, "result", 0.25],
  ["项目推进", "如果一个方案能让团队关系更顺，我愿意牺牲一点个人表达锋芒。", "break", -1, "craft", -0.1],
  ["项目推进", "我更相信专业判断，而不是谁在群里喊得更急。", "craft", 1, "data", 0.25],
  ["汇报时刻", "如果数据不够漂亮，我宁愿先解释变量，也不愿只讲一个好听故事。", "data", 1, "craft", 0.2],
  ["汇报时刻", "汇报里我会优先讲结论和下一步，而不是把过程从头放一遍。", "result", 1, "break", 0.15],
  ["汇报时刻", "我能接受用一个强观点先打开局面，再慢慢补证据。", "data", -1, "break", 0.25],
  ["汇报时刻", "别人说“包装一下”时，我会先想这是不是在掩盖问题。", "data", 1, "craft", 0.2],
  ["汇报时刻", "我会主动把复杂专业问题翻译成老板能快速判断的语言。", "result", 1, "data", 0.15],
  ["汇报时刻", "如果细节没打磨好，我很难安心把东西交出去。", "craft", 1, "data", 0.2],
  ["汇报时刻", "同样的结论，我更在意它能不能打动人，而不是格式是否完美。", "craft", -1, "break", 0.2],
  ["汇报时刻", "当所有人都在等一个好消息时，我也会把坏消息讲清楚。", "data", 1, "result", 0.2],
  ["汇报时刻", "我习惯提前准备备选方案，因为会场永远可能临时转向。", "break", 1, "result", 0.2],
  ["崩溃边缘", "周日晚收到“明早过一下”，我第一反应是开始拆风险和优先级。", "result", 1, "data", 0.2],
  ["崩溃边缘", "当项目延期但锅不全在我，我会主动整理事实链，避免被一句话带走。", "data", 1, "result", 0.25],
  ["崩溃边缘", "如果一个目标看起来不现实，我也会先拆出一个可以开跑的版本。", "break", 1, "result", 0.25],
  ["崩溃边缘", "面对突然插进来的高优需求，我会先判断它到底是不是真高优。", "data", 1, "result", 0.2],
  ["崩溃边缘", "我宁愿把活做扎实一点，也不想靠一次漂亮汇报蒙混过关。", "craft", 1, "data", 0.2],
  ["崩溃边缘", "当团队已经很累时，我会优先找一个能立刻止血的解法。", "result", 1, "break", 0.2],
  ["崩溃边缘", "只要目标值得，我可以接受一段时间的高压和混乱。", "break", 1, "result", 0.25],
  ["崩溃边缘", "我很容易因为别人一句“先这样吧”继续把细节查到天亮。", "craft", 1, "data", 0.25],
  ["崩溃边缘", "当所有人都在催速度时，我仍然会坚持先把关键假设讲清楚。", "data", 1, "craft", 0.25],
].map(([chapter, text, dimension, direction, secondaryDimension, secondaryWeight], index) => ({
  id: `q${index + 1}`,
  chapter,
  text,
  dimension,
  direction,
  secondaryDimension,
  secondaryWeight,
}));

const options = [
  { label: "非常不同意", value: -2 },
  { label: "比较不同意", value: -1 },
  { label: "看情况", value: 0 },
  { label: "比较同意", value: 1 },
  { label: "非常同意", value: 2 },
];

const app = document.querySelector("#app");
let state = {
  step: "home",
  index: 0,
  answers: Array(questions.length).fill(null),
  result: null,
  feedback: null,
};

function track(event, payload = {}) {
  const record = {
    event,
    payload,
    at: new Date().toISOString(),
  };
  const events = JSON.parse(localStorage.getItem("companysona-events") || "[]");
  events.push(record);
  localStorage.setItem("companysona-events", JSON.stringify(events.slice(-200)));
}

function render() {
  if (state.step === "home") renderHome();
  if (state.step === "quiz") renderQuiz();
  if (state.step === "result") renderResult();
}

function renderHome() {
  app.innerHTML = `
    <section class="screen hero">
      <div class="hero-grid">
        <div>
          <span class="eyebrow">测测你的大厂人格</span>
          <h1>Companysona</h1>
          <p class="subtitle">把 36 个真实职场瞬间过一遍，看看你到底像哪种公司气质。</p>
          <button class="primary-action" data-action="start">开始测试</button>
          <p class="microcopy">非官方娱乐人格联想。答完会生成一张结果卡，准不准你说了算。</p>
        </div>
        <div class="hero-visual">
          <div class="persona-stage">
            <div class="orbit-card">证据链</div>
            <div class="orbit-card">OKR</div>
            <div class="orbit-card">会前会</div>
            <div class="orbit-card">明早过一下</div>
            <div class="signal">36</div>
            ${avatarMarkup("HQ")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderQuiz() {
  const question = questions[state.index];
  const progress = Math.round(((state.index + 1) / questions.length) * 100);
  app.innerHTML = `
    <section class="screen quiz-shell">
      <div class="topbar">
        <div class="brand">Companysona</div>
        <div class="progress-text">${state.index + 1} / ${questions.length}</div>
      </div>
      <div class="progress-track"><div class="progress-bar" style="width:${progress}%"></div></div>
      <article class="question-card">
        <div class="chapter">${question.chapter}</div>
        <h2>${question.text}</h2>
        <div class="options">
          ${options
            .map(
              (option) => `
                <button class="option ${state.answers[state.index] === option.value ? "is-selected" : ""}" data-answer="${option.value}">
                  ${option.label}
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="quiz-actions">
          <button class="ghost-action" data-action="prev" ${state.index === 0 ? "disabled" : ""}>上一题</button>
        </div>
      </article>
    </section>
  `;
}

function renderResult() {
  const result = state.result || calculateResult();
  const resultUrl = `${location.origin}${location.pathname}#${result.id}`;
  app.innerHTML = `
    <section class="screen result-shell">
      <div class="topbar">
        <div class="brand">Companysona</div>
        <button class="ghost-action" data-action="restart">再测一次</button>
      </div>
      <article class="result-hero">
        <div class="poster-card">
          <div>
            <p class="result-label">你的大厂人格</p>
            <h2 class="result-title">${result.company}</h2>
            <div class="result-subtitle">${result.name}</div>
            <p class="result-label">厂牌共振指数 ${result.match}%</p>
            <p class="result-quote">${result.quote}</p>
          </div>
          ${portraitMarkup(result)}
        </div>
        <div class="result-actions">
          <button class="primary-action" data-action="poster">生成分享海报</button>
          <button class="secondary-action" data-action="copy" data-url="${resultUrl}">发给朋友测</button>
        </div>
        <div id="toast" class="toast" aria-live="polite"></div>
      </article>
      <section class="report">
        ${section("一句话定义", `<p>${result.definition}</p>`)}
        ${section("为什么是你", `<p>${result.analysis}</p>`)}
        ${section("四维画像", dimensionMarkup(result.dimensions))}
        ${section("典型行为", listMarkup(result.behaviors))}
        ${section("职场优点", `<p>${result.strengths}</p>`)}
        ${section("职场痛点", `<p>${result.pains}</p>`)}
        ${section("适配环境", `<p>${result.environment}</p>`)}
        ${section("最怕遇到", `<p>${result.nemesis}</p>`)}
        ${section("你的自救指南", `<p>${result.survival}</p>`)}
        <section class="report-section">
          <h3>准不准</h3>
          <p>别客气，给这份工位监控回放打个反馈。</p>
          <div class="feedback-actions">
            <button class="feedback-button ${state.feedback === "accurate" ? "is-selected" : ""}" data-feedback="accurate">准</button>
            <button class="feedback-button ${state.feedback === "off" ? "is-selected" : ""}" data-feedback="off">不准</button>
          </div>
        </section>
      </section>
    </section>
  `;
}

function section(title, content) {
  return `<section class="report-section"><h3>${title}</h3>${content}</section>`;
}

function listMarkup(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function dimensionMarkup(scores) {
  return `<div class="dimension-grid">${Object.entries(dimensions)
    .map(
      ([key, label]) => `
        <div class="dimension-row">
          <span>${label}</span>
          <div class="meter"><span style="width:${scores[key]}%"></span></div>
          <span>${scores[key]}</span>
        </div>
      `,
    )
    .join("")}</div>`;
}

function avatarMarkup(badge) {
  return `
    <div class="avatar" aria-hidden="true">
      <div class="avatar-head"></div>
      <div class="avatar-hair"></div>
      <div class="avatar-body"></div>
      <div class="badge">${badge}</div>
    </div>
  `;
}

function portraitMarkup(result) {
  return `
    <div class="portrait" style="background: linear-gradient(155deg, ${result.color}33, transparent 52%), #fffaf0">
      <div class="motif one">${result.motifs[0]}</div>
      <div class="motif two">${result.motifs[1]}</div>
      <div class="motif three">${result.motifs[2]}</div>
      ${avatarMarkup(result.company)}
    </div>
  `;
}

function calculateResult() {
  const raw = { data: 0, break: 0, result: 0, craft: 0 };
  const max = { data: 0, break: 0, result: 0, craft: 0 };

  questions.forEach((question, index) => {
    const answer = state.answers[index] ?? 0;
    raw[question.dimension] += answer * question.direction;
    max[question.dimension] += 2;
    if (question.secondaryDimension) {
      raw[question.secondaryDimension] += answer * question.secondaryWeight;
      max[question.secondaryDimension] += Math.abs(2 * question.secondaryWeight);
    }
  });

  const scores = Object.fromEntries(
    Object.keys(raw).map((key) => {
      const normalized = 50 + (raw[key] / Math.max(max[key], 1)) * 50;
      return [key, Math.max(0, Math.min(100, Math.round(normalized)))];
    }),
  );

  let best = companies[0];
  let bestDistance = Number.POSITIVE_INFINITY;
  companies.forEach((company) => {
    const distance = Object.keys(scores).reduce((sum, key) => {
      return sum + Math.pow(scores[key] - company.scores[key], 2);
    }, 0);
    if (distance < bestDistance) {
      best = company;
      bestDistance = distance;
    }
  });

  const match = Math.max(61, Math.min(97, Math.round(100 - Math.sqrt(bestDistance) / 2.4)));
  return {
    ...best,
    dimensions: scores,
    match,
    resultId: `${best.id}-${Date.now().toString(36)}`,
  };
}

function resultFromHash() {
  const id = location.hash.replace("#", "");
  if (!id) return null;
  const company = companies.find((item) => item.id === id);
  if (!company) return null;
  return {
    ...company,
    dimensions: company.scores,
    match: 88,
    resultId: `${company.id}-shared`,
  };
}

function finishQuiz() {
  state.result = calculateResult();
  state.step = "result";
  history.replaceState(null, "", `#${state.result.id}`);
  track("complete", {
    result: state.result.id,
    match: state.result.match,
    dimensions: state.result.dimensions,
  });
  render();
}

function generatePoster(result) {
  const canvas = document.querySelector("#poster-canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f7f1e7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = result.color;
  ctx.fillRect(70, 70, 940, 1360);
  ctx.fillStyle = "#fffaf0";
  ctx.fillRect(96, 96, 888, 1308);
  ctx.strokeStyle = "#171512";
  ctx.lineWidth = 8;
  ctx.strokeRect(96, 96, 888, 1308);

  ctx.fillStyle = "#171512";
  ctx.font = "900 54px sans-serif";
  ctx.fillText("Companysona", 150, 210);
  ctx.font = "800 36px sans-serif";
  ctx.fillText("测测你的大厂人格", 150, 270);

  ctx.font = "900 132px sans-serif";
  ctx.fillText(result.company, 150, 480);
  ctx.font = "900 66px sans-serif";
  ctx.fillText(result.name, 150, 570);
  ctx.font = "800 38px sans-serif";
  ctx.fillText(`厂牌共振指数 ${result.match}%`, 150, 650);

  drawWrappedText(ctx, result.quote, 150, 780, 780, 58);
  drawAvatar(ctx, result, 540, 1050);

  ctx.font = "700 30px sans-serif";
  ctx.fillText("非官方娱乐人格联想", 150, 1320);

  const url = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = `companysona-${result.id}.png`;
  link.href = url;
  link.click();
  track("save_poster", { result: result.id });
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  ctx.fillStyle = "#171512";
  ctx.font = "900 48px sans-serif";
  const words = Array.from(text);
  let line = "";
  words.forEach((word) => {
    const testLine = `${line}${word}`;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, x, y);
}

function drawAvatar(ctx, result, x, y) {
  ctx.fillStyle = result.color;
  ctx.fillRect(x - 130, y - 30, 260, 250);
  ctx.strokeStyle = "#171512";
  ctx.lineWidth = 8;
  ctx.strokeRect(x - 130, y - 30, 260, 250);
  ctx.fillStyle = "#f2c4a4";
  ctx.beginPath();
  ctx.arc(x, y - 130, 88, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#171512";
  ctx.beginPath();
  ctx.ellipse(x, y - 185, 92, 46, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fffaf0";
  ctx.fillRect(x - 70, y + 42, 140, 56);
  ctx.strokeRect(x - 70, y + 42, 140, 56);
  ctx.fillStyle = "#171512";
  ctx.font = "900 28px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(result.company, x, y + 80);
  ctx.textAlign = "left";
}

app.addEventListener("click", async (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  const action = target.dataset.action;
  const answer = target.dataset.answer;
  const feedback = target.dataset.feedback;

  if (action === "start") {
    state.step = "quiz";
    state.index = 0;
    state.answers = Array(questions.length).fill(null);
    state.result = null;
    state.feedback = null;
    track("start");
    render();
  }

  if (answer !== undefined) {
    state.answers[state.index] = Number(answer);
    if (state.index === questions.length - 1) {
      finishQuiz();
    } else {
      state.index += 1;
      render();
    }
  }

  if (action === "prev" && state.index > 0) {
    state.index -= 1;
    render();
  }

  if (action === "restart") {
    state = { step: "home", index: 0, answers: Array(questions.length).fill(null), result: null, feedback: null };
    history.replaceState(null, "", location.pathname);
    track("restart");
    render();
  }

  if (action === "poster") {
    generatePoster(state.result);
    document.querySelector("#toast").textContent = "海报已生成，去相册里捞它。";
  }

  if (action === "copy") {
    const text = `${state.result.company}｜${state.result.name}。${state.result.quote} ${target.dataset.url}`;
    try {
      await navigator.clipboard.writeText(text);
      document.querySelector("#toast").textContent = "分享文案已复制，发给同事测测。";
    } catch {
      document.querySelector("#toast").textContent = "复制失败了，但这事不影响你的厂牌人格。";
    }
    track("share_click", { result: state.result.id });
  }

  if (feedback) {
    state.feedback = feedback;
    track("feedback", { value: feedback, result: state.result.id });
    render();
  }
});

const sharedResult = resultFromHash();
if (sharedResult) {
  state.step = "result";
  state.result = sharedResult;
  track("shared_result_open", { result: sharedResult.id });
}

render();
