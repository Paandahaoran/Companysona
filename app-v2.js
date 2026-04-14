const APP_VERSION = "V2";
const CONTENT_VERSION = "V2-2026-04-14";

const dimensions = {
  data: "数据感",
  break: "突破欲",
  result: "结果压强",
  craft: "专业深潜",
};

const analyticsConfig = {
  supabaseUrl: "https://qqrxidxvtigyfnbqdvsw.supabase.co",
  publishableKey: "sb_publishable_9Wd4HPtQiECaHH933UvtZw_-a4sbY4b",
  table: "companysona_events",
};

const companies = [
  persona("dji", "DJI", "参数不对不下班", "真理追求者", "你不是在上班，你是在给世界调参。", "#2b6ef3", ["参数", "证据", "实验室"], { data: 95, break: 68, result: 75, craft: 96 },
    "你相信世界上没有“差不多”，只有还没测清楚的变量。",
    "你像一台对模糊过敏的验证机器。别人说先上，你先问口径；别人说感觉不错，你先问样本量。你不是杠，你只是很难眼睁睁看着一个没定义清楚的问题奔向上线。",
    ["会把一句“感觉不太对”拆成变量、样本和验证路径。", "对没有证据链的结论保持礼貌性沉默。", "别人要推进，你先检查推进方向是不是错的。"],
    "判断稳，专业可信，适合把混乱问题拆到能验证。",
    "你容易把普通周会开成论文答辩，别人觉得你卡进度，你觉得他们让问题裸奔。",
    "硬件、技术、产品质量、策略分析、长期口碑型团队。",
    "最怕只讲故事不看证据、把“差不多”当工作方法的人。",
    "继续追求真理，但不是每个会都值得调参到天亮。"),
  persona("bytedance", "字节", "飞书文档永动机", "增长压强体", "你不是内耗，你只是还没把自己写进 OKR。", "#e3483e", ["飞书", "A/B", "OKR"], { data: 88, break: 92, result: 96, craft: 62 },
    "你相信混乱不是不能解决，只是还没有被写进一个结构清晰、指标明确、风险可追踪的文档里。",
    "你的默认动作是先写 doc。背景、目标、指标、结论、风险、owner、deadline，一个都不能少。别人说“先碰一下”，你脑子里已经自动生成会议纪要模板。你不怕复盘，你怕复盘没有数据、归因和下一轮实验。",
    ["任何讨论开始前，你都想先补背景、目标和 next step。", "项目没推进，你先问 blocker 写哪了。", "你能把焦虑压成动作，把拍脑袋变成实验。"],
    "推进快，结构强，能把模糊目标拆成可验证动作。",
    "你容易把生活也活成飞书文档。别人只是想聊聊，你已经开始追问结论、证据和行动项。",
    "增长、产品、策略、内容、商业化和高反馈团队。",
    "最怕只开会不沉淀、只表达不负责、只说“大家再想想”的协作对象。",
    "不是所有关系都需要 next step。有些人只是想下班。"),
  persona("alibaba", "阿里", "抓手颗粒度大师", "战役黑话炼金术士", "你不是说黑话，你是在给混乱世界做业务命名。", "#ff6a00", ["抓手", "心智", "战役"], { data: 72, break: 82, result: 90, craft: 58 },
    "你擅长把普通项目讲成战役，把执行动作提炼成打法，把资源重新命名成关键抓手。",
    "你不说做活动，你说围绕用户心智打穿关键场景。你不说找人帮忙，你说需要拉齐协同资源，形成业务闭环。你很在意词，因为词一旦立住，事情就像有了组织动员能力。",
    ["能把混乱会议总结成三层框架、四个抓手、五个下一步。", "面对资源卡点，你会先重构叙事。", "别人问几点上线，你已经讲到心智和打法。"],
    "组织叙事强，擅长动员资源，把复杂问题包装成有方向的战役。",
    "你有时会把简单问题说成集团级命题，让听众在颗粒度里迷路。",
    "平台业务、商业化、运营、市场、跨团队资源整合项目。",
    "最怕只认代码不认叙事、听到“抓手”就翻白眼的人。",
    "黑话是工具，不是空气。该说人话的时候，也给大家留点氧气。"),
  persona("tencent", "腾讯", "PPT 氛围组", "水系协同者", "你不是慢，你是在等事情自己露出水面。", "#2b6ef3", ["PPT", "水系", "生态"], { data: 62, break: 45, result: 62, craft: 58 },
    "你擅长给复杂关系留空间，把冲突包装成还能继续合作的问题。",
    "你不迷信硬冲。你会看气氛、看关系、看谁真正影响决策，再把话说到对方能接住的位置。你知道 PPT 不只是页面，而是组织接受度的缓冲垫。",
    ["开会先观察水位，不急着掀桌。", "会把方案做得更容易被接受。", "擅长在复杂组织里留退路。"],
    "协同稳，关系判断好，能让事情在大组织里慢慢流动。",
    "你可能太会留空间，导致关键判断被藏到别人以为你没判断。",
    "平台、社交、生态、品牌协作、长期型业务。",
    "最怕上来就掀桌、把所有事都变成输赢的人。",
    "水也要有方向。别把每次克制都误会成成熟。"),
  persona("huawei", "华为", "责任田攻坚户", "高压闭环者", "你不是能扛，你是已经默认自己必须扛住。", "#d9292f", ["闭环", "战报", "攻坚"], { data: 82, break: 72, result: 98, craft: 86 },
    "你相信目标就是军令状，问题可以难，但不能没人负责。",
    "你的底层系统写着闭环。风险、责任人、时间点、交付物，必须钉住。别人看你像卷，你知道自己只是防止系统掉线。",
    ["会追责任人和截止时间。", "遇到硬仗先拆路径，不先抱怨命苦。", "对没有 owner 的任务极度不信任。"],
    "抗压强，能打硬仗，复杂项目里很容易成为稳定中枢。",
    "你经常把自己活成最后一道防线，久了会忘记人不是服务器。",
    "重交付、重技术、重客户承诺的攻坚型团队。",
    "最怕只喊愿景、不承担结果、把锅写进空气里的管理方式。",
    "闭环很重要，但你也需要给自己留一个出口。"),
  persona("xiaomi", "小米", "参数党省钱王", "性价比理想主义者", "你不是抠，你是在和浪费进行长期斗争。", "#ff7a1a", ["参数", "发布会", "性价比"], { data: 72, break: 74, result: 82, craft: 60 },
    "你擅长在资源有限时找到最能打的解法。",
    "你有理想，但不迷信豪华配置。你会把目标拆成用户真正能感知的体验，尽量让每一份投入都变成看得见的价值。",
    ["习惯追问投入产出比。", "能把复杂方案压成用户真的会用的版本。", "对虚胖预算和无效排场不太买账。"],
    "务实，会取舍，懂用户感知，也懂资源边界。",
    "你容易在理想和成本之间反复横跳，把自己变成预算会计兼产品经理。",
    "硬件、消费产品、增长、平台型业务和资源约束明确的团队。",
    "最怕只追高级感不算账，或者只谈降本不谈体验的人。",
    "有些情绪价值，也值得被列进预算。"),
  persona("apple", "苹果", "像素级挑刺人", "体验洁癖者", "你不是挑剔，你是看见了别人没看见的毛边。", "#111111", ["留白", "细节", "边角"], { data: 86, break: 62, result: 76, craft: 94 },
    "你对体验、秩序和完整度有近乎本能的要求。",
    "一个按钮的位置、一段话的语气、一个流程的停顿，都可能被你看成产品人格的一部分。你不是为了优雅而优雅，你相信体验会在沉默处决定信任。",
    ["会盯交互细节和表达一致性。", "对临时拼凑的方案容忍度很低。", "喜欢少而准，不喜欢多而乱。"],
    "审美稳定，标准高，能把产品做出信任感和完成度。",
    "你容易被说慢、贵、讲究，而你觉得他们只是没听见系统在漏风。",
    "体验驱动、品牌驱动、设计系统和高品质产品团队。",
    "最怕一边喊高级，一边把每个页面都塞满入口的人。",
    "有些毛边值得修，有些毛边只是上线前的灰尘。"),
  persona("nio", "蔚来", "情绪续航管家", "用户情绪管家", "你不是服务意识强，你是连对方的失落都想接住。", "#2f6fb3", ["社区", "补能", "陪伴"], { data: 58, break: 68, result: 66, craft: 54 },
    "你擅长经营关系、回应感受，也愿意把用户体验当长期承诺。",
    "你看重的不只是事情做完，而是人有没有被照顾到。你会补上那些没人写进需求文档的情绪缝隙，也会因为一句反馈反复琢磨是不是哪里没接住。",
    ["会主动安抚协作方的不确定感。", "比起冷冰冰交付，更在意体验是否完整。", "容易成为团队里的关系润滑剂。"],
    "共情强，服务意识好，适合做长期用户关系和社区信任。",
    "你可能把别人的情绪也背在自己身上，最后累到像一个人形客服中心。",
    "用户运营、社区、服务体验、品牌和长期客户关系团队。",
    "最怕只看短期指标、把用户感受当噪音的人。",
    "共情不是无限续杯。你可以接住别人，但不必替所有人落地。"),
  persona("tesla", "特斯拉", "边界爆破手", "极限开荒者", "你不是不怕风险，你是更怕原地等死。", "#cc1f2f", ["加速", "工厂", "火星"], { data: 75, break: 98, result: 95, craft: 80 },
    "你偏爱高难度目标和非常规路径，能在混乱中把事情往前撞。",
    "你对边界的第一反应不是接受，而是测试。规则可以有，但不能先于问题存在。你会在不确定里开路，也会因为速度太快把旁边的人吓出工伤级心率。",
    ["遇到卡点会先找绕路方案。", "对慢吞吞的层层审批耐心有限。", "愿意为了突破承受高压和争议。"],
    "破局强，速度快，适合从 0 到 1 或危机攻坚。",
    "你可能低估组织承压能力，把别人都带进你的极限测试场。",
    "创新业务、硬科技攻坚、出海增长和强目标团队。",
    "最怕把稳定当唯一目标、把流程当护身符的人。",
    "冲可以，记得回头看看队友还在不在车上。"),
  persona("popmart", "泡泡玛特", "情绪上头制造机", "情绪造梦师", "你卖的不是功能，是大家愿意为之上头的那一秒。", "#f7c948", ["盲盒", "心动", "展柜"], { data: 62, break: 80, result: 74, craft: 55 },
    "你擅长捕捉人心里那些说不清但会买单的瞬间。",
    "你不只是在做事，你在设计一种别人愿意靠近的感觉。你知道数据重要，但也知道有些决策来自眼睛亮起来的那一下。",
    ["会先问用户为什么心动，再问转化率为什么波动。", "对“没感觉”三个字非常敏感。", "能把普通卖点翻译成分享入口。"],
    "审美敏锐，包装能力强，懂用户情绪和内容传播。",
    "你有时会被说不够理性，尤其当别人只想要表格，而你想解释人为什么会心动。",
    "品牌、内容、用户增长、新消费、社区和创意型团队。",
    "最怕只会问 ROI、看不见情绪价值、把所有创意都压成表格的人。",
    "保留直觉，但给它配一条证据链。会做梦的人如果也会算账，就很难被会议带走。"),
  persona("meituan", "美团", "最后一公里人形插件", "履约机器魂", "你不是没有感情，你只是先看这单能不能准时送达。", "#f7c948", ["路径", "履约", "SLA"], { data: 84, break: 80, result: 96, craft: 70 },
    "你在意系统能不能真正跑通，尤其在复杂约束下交付结果。",
    "你不迷信漂亮方案，因为你知道现场会教做人。你会把目标拆成路线、节点、成本和 SLA，在别人讲愿景时，你已经开始想哪里会堵、谁来兜底。",
    ["会优先确认链路和责任边界。", "对“理论上可行”保持谨慎。", "能在复杂条件下找到最短可交付路径。"],
    "落地强，系统感好，适合把复杂业务做成稳定机器。",
    "你可能太早进入执行细节，让创意还没长大就被履约压力按住。",
    "本地生活、供应链、平台运营、策略和重交付业务。",
    "最怕只会画大饼、不知道谁来送最后一公里的人。",
    "效率很重要，但别把自己也当成一条可无限压缩的链路。"),
  persona("loreal", "欧莱雅", "精致商业脑", "心智上妆师", "你不是爱包装，你是知道人会先被感觉说服。", "#a855f7", ["色号", "趋势", "柜台"], { data: 62, break: 64, result: 72, craft: 56 },
    "你擅长把品牌感、用户洞察和商业转化揉成一个顺滑故事。",
    "名字、颜色、场景、话术、货架位置，每一个细节都可能改变用户判断。你不是空谈审美，你是在把感受变成生意。",
    ["会在意表达是否匹配人群心智。", "能把卖点翻译成用户愿意相信的理由。", "对粗糙包装和错位语气很敏感。"],
    "品牌感强，商业嗅觉好，擅长用户心智和内容包装。",
    "你容易被纯指标派催到窒息，也可能被创意派嫌太商业。",
    "品牌营销、内容电商、新消费、用户研究和渠道增长。",
    "最怕只会说高级但卖不动，或只会促销但毁掉品牌的人。",
    "精致不是目的，转化也不是全部。你要做的是让二者别互相谋杀。"),
  persona("pdd", "拼多多", "转化率冷面杀手", "极致结果党", "你不是没耐心，你只是对无效优雅免疫。", "#e3483e", ["低价", "裂变", "转化"], { data: 78, break: 88, result: 98, craft: 58 },
    "你对结果有近乎残酷的敏感度，愿意为了有效放弃漂亮姿势。",
    "你很少被宏大叙事感动。东西有没有用、用户买不买、数据动不动，比表达是否体面更重要。你能在复杂噪音里抓住最硬的变量。",
    ["会快速识别哪个动作真能带来结果。", "不太吃精致但无效的方案。", "能在资源有限时打出惊人效率。"],
    "目标感极强，商业嗅觉直接，执行不绕弯。",
    "你可能把过程体验压得太薄，让团队觉得自己像被指标追着跑。",
    "增长、交易、供应链、下沉市场、效率导向业务。",
    "最怕只讲格调、不讲转化、把问题包装成态度的人。",
    "结果要赢，但别把所有关系都当成成本项。"),
  persona("civil-servant", "公务员", "材料闭环守门人", "稳妥口径管理员", "你不是拖延，你是在保护大家不要被一句话带走。", "#3b5b4f", ["材料", "口径", "请示"], { data: 70, break: 30, result: 70, craft: 66 },
    "你相信事情可以慢，但不能乱；可以不抢，但不能没有流程、材料和可追溯口径。",
    "你对“计划赶不上领导一句话”已经完成脱敏，甚至会提前给计划留一个被打乱的备份位。群里突然冒出一个问题，你第一反应不是表态，而是先看有没有前置材料、口径和请示路径。",
    ["遇到突发指令，会立刻更新口径和材料。", "很少当场把话说满，因为口径出去就很难收回。", "擅长把混乱意见整理成纪要、待办、责任人和下一步请示。"],
    "稳、细、抗风险，能在复杂关系和模糊责任里保证事情不失控。",
    "明明上午刚排好计划，下午领导一句“这个先放一放”，你就要把整张表重新做人。",
    "规则复杂、风险敏感、对外口径重要、需要多方协调的环境。",
    "最怕现场拍脑袋、会后不认账、没有材料还要马上表态的人。",
    "稳妥是能力，但别让每个机会都先进入材料流转状态。"),
  persona("teacher", "老师", "课堂秩序管理员", "作业闭环班主任", "你不是爱管人，你是太知道没人收作业会发生什么。", "#5b7cfa", ["课堂", "作业", "纪律"], { data: 68, break: 40, result: 78, craft: 74 },
    "你擅长把混乱的人和事拉回秩序，用耐心、规则和重复提醒维持系统运转。",
    "你对“再等等大家就会自觉”这句话不太信。你知道没有明确要求、截止时间和反馈机制，很多事情会自动消失在群聊里。",
    ["会把任务拆成能检查的作业。", "看到没人响应会主动点名。", "对秩序、反馈和持续改进很敏感。"],
    "责任心强，能建立秩序，也能把复杂内容讲到别人听懂。",
    "你容易操心过度，最后把同事也当成需要交作业的学生。",
    "培训、运营、项目管理、知识沉淀、团队协作密集的环境。",
    "最怕不看通知、不交付、不反馈，还说自己很忙的人。",
    "你可以提醒大家交作业，但别把全班的人生都背在自己身上。"),
  persona("doctor", "医生", "风险分诊判官", "先救命再美化", "你不是冷静，你是在先判断哪个问题会死人。", "#0f766e", ["分诊", "风险", "记录"], { data: 86, break: 42, result: 88, craft: 82 },
    "你遇事先分轻重缓急，最关心风险、证据和不可逆后果。",
    "你不喜欢无意义渲染，也不迷信漂亮叙事。你会先判断什么最危险、什么必须马上处理、什么可以观察。别人觉得你冷，你只是把情绪排在了风险后面。",
    ["会先做风险分级。", "重要判断必须有记录和依据。", "不太接受为了好看牺牲交付安全。"],
    "专业、冷静、抗压，适合高风险、高责任、强判断场景。",
    "你可能显得太严肃，让一些需要情绪陪伴的人觉得被冷处理。",
    "风控、医疗、质量、法务、数据安全、复杂项目救火。",
    "最怕只看感受不看风险、把高危问题包装成小瑕疵的人。",
    "先救命没错，但有时也要告诉别人你不是没有感情。"),
  persona("banker", "银行人", "合规微笑机器", "风险口径守门员", "你不是保守，你是知道每个签字都有后果。", "#1f5f99", ["合规", "额度", "审批"], { data: 76, break: 34, result: 78, craft: 72 },
    "你习惯在机会和风险之间找平衡，任何看似简单的动作都要先过合规和审批。",
    "你不是不想快，而是知道快错了会留下记录。你会看额度、权限、材料、流程，也会用非常职业的微笑把不合规的幻想送走。",
    ["会先确认权限和审批链路。", "对材料缺口和风险暴露很敏感。", "能把复杂要求讲得很稳。"],
    "稳健、可信、风险意识强，适合流程严密和责任明确的环境。",
    "你可能被嫌慢，但很多人只是在你替他们挡风险时没有意识到。",
    "金融、风控、客户管理、合规、运营支持和成熟组织。",
    "最怕没有材料就要承诺、没有权限就要拍板的人。",
    "合规是底线，但别让每一次合作都像办贷款。"),
];

const sceneProfiles = {
  dji: { risk: 2, report: 1, education: 1 },
  bytedance: { execution: 2, report: 1, collaboration: 1 },
  alibaba: { collaboration: 2, packaging: 1, execution: 1 },
  tencent: { collaboration: 2, emotion: 1, packaging: 1 },
  huawei: { execution: 2, process: 1, risk: 1 },
  xiaomi: { execution: 2, service: 1, education: 1 },
  apple: { packaging: 1, education: 1, risk: 1 },
  nio: { emotion: 2, service: 2, collaboration: 1 },
  tesla: { execution: 2, risk: 1, service: 1 },
  popmart: { packaging: 2, emotion: 1, service: 1 },
  meituan: { execution: 2, service: 1, collaboration: 1 },
  loreal: { packaging: 2, report: 1, education: 1 },
  pdd: { execution: 2, collaboration: 1 },
  "civil-servant": { process: 2, risk: 1, report: 1 },
  teacher: { education: 2, emotion: 1, collaboration: 1 },
  doctor: { risk: 2, service: 1, education: 1 },
  banker: { process: 2, risk: 2, service: 1 },
};

function persona(id, company, name, subtitle, quote, color, motifs, scores, definition, analysis, behaviors, strengths, pains, environment, nemesis, survival) {
  return { id, company, name, subtitle, quote, color, motifs, scores, definition, analysis, behaviors, strengths, pains, environment, nemesis, survival };
}

function option(label, type, dimensions, scene, bonus) {
  return { label, type, dimensions, scene, bonus };
}

let nextQuestionId = 1;

const questions = [
  q("协作", "群里突然甩来一句“现在就卡你这了”，你会？",
    option("先翻记录，看锅从哪滚来", "fact", { data: 2, craft: 1 }, { collaboration: 2, risk: 1 }, { dji: 2, bytedance: 1, doctor: 1 }),
    option("私聊灭火，别先炸群", "people", { break: -1, craft: 1 }, { emotion: 2, collaboration: 1 }, { tencent: 2, nio: 2, teacher: 1 }),
    option("把下一步和负责人钉住", "boundary", { result: 2, data: 1 }, { collaboration: 2, process: 1 }, { huawei: 2, "civil-servant": 1, banker: 1 }),
    option("找能拍板的人止血", "resource", { break: 1, result: 2 }, { collaboration: 1, execution: 2 }, { alibaba: 1, meituan: 2, pdd: 1 })),
  q("高压", "计划排得好好的，领导一句“下午先改这个”，你会？",
    option("先算哪些安排会塌", "risk", { data: 2, result: 1 }, { risk: 2, process: 1 }, { "civil-servant": 2, banker: 1, doctor: 1 }),
    option("问清这次到底改多大", "boundary", { data: 1, break: -1 }, { process: 2 }, { "civil-servant": 2, dji: 1, huawei: 1 }),
    option("先做个能交差的版本", "experiment", { break: 1, result: 2 }, { execution: 2 }, { meituan: 2, xiaomi: 1, tencent: 1 }),
    option("先稳住被波及的人", "people", { craft: 1, break: -1 }, { emotion: 2, collaboration: 1 }, { nio: 2, teacher: 1, tencent: 1 })),
  q("汇报", "汇报到一半，有人说“这结论站不住”，你会？",
    option("承认边界，补一层依据", "fact", { data: 2, craft: 1 }, { report: 2, risk: 1 }, { dji: 2, doctor: 1, apple: 1 }),
    option("加一个能验证的小动作", "experiment", { data: 1, break: 1, result: 1 }, { report: 1, execution: 1 }, { bytedance: 2, tesla: 1, xiaomi: 1 }),
    option("换成大家更能听懂的话", "story", { craft: 1, data: -1 }, { report: 2, packaging: 1 }, { tencent: 2, loreal: 2, popmart: 1 }),
    option("会后补齐，别当场硬刚", "risk", { break: -1, data: 1 }, { report: 1, process: 2 }, { "civil-servant": 2, banker: 2, teacher: 1 })),
  q("服务对象", "对方说“就小改一下”，但你闻到事情要变异了，你会？",
    option("先问会牵动哪些地方", "risk", { data: 2, result: 1 }, { service: 1, execution: 1 }, { doctor: 1, meituan: 2, bytedance: 1 }),
    option("把能改和不能改说清", "boundary", { data: 1, result: 1 }, { service: 1, process: 2 }, { banker: 2, "civil-servant": 1, huawei: 1 }),
    option("给一个对方能接受的替代版", "people", { craft: 1, result: 1 }, { service: 2, emotion: 1 }, { nio: 2, tencent: 1, teacher: 1 }),
    option("先切个最小可用版本", "experiment", { break: 2, result: 1 }, { service: 1, execution: 2 }, { tesla: 2, xiaomi: 1, bytedance: 1 })),
  q("协作", "群里“对齐一下”半小时，最后一个行动项都没有，你会？",
    option("直接整理待办清单", "explain", { data: 1, result: 2 }, { collaboration: 2, execution: 1 }, { bytedance: 2, teacher: 1, huawei: 1 }),
    option("问谁能拍这个板", "resource", { result: 2, break: 1 }, { collaboration: 1, execution: 2 }, { meituan: 2, alibaba: 1, pdd: 1 }),
    option("先把分歧翻译成人话", "explain", { craft: 1, data: 1 }, { collaboration: 2, emotion: 1 }, { tencent: 2, teacher: 2, loreal: 1 }),
    option("先等一个正式结论", "risk", { break: -2, data: 1 }, { process: 2 }, { "civil-servant": 2, banker: 2 })),
  q("解释", "你要给一群不同背景的人解释复杂问题，你会？",
    option("从一个例子开始讲", "explain", { craft: 1, data: 1 }, { education: 2 }, { teacher: 3, tencent: 1, loreal: 1 }),
    option("先画出关键结构", "fact", { data: 2, craft: 1 }, { education: 1, report: 1 }, { dji: 2, apple: 1, bytedance: 1 }),
    option("先讲这事和他们有什么关系", "story", { craft: 1, result: 1 }, { education: 1, packaging: 1 }, { loreal: 2, popmart: 1, alibaba: 1 }),
    option("先列注意事项和禁区", "risk", { data: 1, break: -1 }, { education: 1, risk: 2 }, { doctor: 2, banker: 1, "civil-servant": 1 })),
  q("情绪劳动", "对方情绪很大，但事情确实要继续推进，你会？",
    option("先听完，别急着纠错", "people", { craft: 1, break: -1 }, { emotion: 2, service: 1 }, { nio: 3, teacher: 1, tencent: 1 }),
    option("先确认最危险的问题", "risk", { data: 2, result: 1 }, { emotion: 1, risk: 2 }, { doctor: 3, banker: 1 }),
    option("先给一个下一步动作", "experiment", { result: 2, break: 1 }, { emotion: 1, execution: 2 }, { meituan: 2, bytedance: 1, xiaomi: 1 }),
    option("先把责任边界说清", "boundary", { data: 1, result: 1 }, { emotion: 1, process: 1 }, { huawei: 2, "civil-servant": 1, banker: 1 })),
  q("风险", "方案包装得很丝滑，但你总觉得后面有坑，你会？",
    option("先问最坏会怎样", "risk", { data: 2, craft: 1 }, { risk: 2 }, { doctor: 2, banker: 2, dji: 1 }),
    option("先找一组真实反馈", "fact", { data: 2, break: 1 }, { risk: 1, service: 1 }, { bytedance: 2, dji: 1, xiaomi: 1 }),
    option("先保留亮点，再补风险页", "story", { craft: 1, result: 1 }, { packaging: 1, report: 1 }, { tencent: 2, loreal: 2 }),
    option("先请相关人确认责任", "boundary", { break: -1, result: 1 }, { process: 2, risk: 1 }, { "civil-servant": 2, huawei: 1, banker: 2 })),
  q("临场判断", "突然来了个“高优”，但没人说清交付标准，你会？",
    option("先追交付标准", "boundary", { data: 2, result: 1 }, { execution: 1, process: 1 }, { bytedance: 2, dji: 1, huawei: 1 }),
    option("先跑一版能看的", "experiment", { break: 2, result: 2 }, { execution: 2 }, { tesla: 2, meituan: 2, xiaomi: 1 }),
    option("先找类似案例抄作业", "resource", { data: 1, craft: 1 }, { execution: 1, education: 1 }, { teacher: 1, loreal: 1, apple: 1 }),
    option("先确认是不是正式任务", "risk", { break: -2, data: 1 }, { process: 2 }, { "civil-servant": 2, banker: 2 })),
  q("汇报", "大家都礼貌地点头，但你发现其实没人听懂，你会？",
    option("用一句人话重讲", "explain", { craft: 1, result: 1 }, { education: 2, report: 1 }, { teacher: 2, tencent: 1, loreal: 1 }),
    option("会后补一份说明", "fact", { data: 1, craft: 1 }, { report: 1, process: 1 }, { bytedance: 2, "civil-servant": 1 }),
    option("先抓住关键人对齐", "resource", { result: 2, break: 1 }, { collaboration: 2 }, { alibaba: 2, meituan: 1, pdd: 1 }),
    option("先让会议按时结束", "people", { break: -1, craft: 1 }, { emotion: 1, collaboration: 1 }, { tencent: 2, nio: 1, banker: 1 })),
  q("流程", "审批卡住了，但对方一直没回复，你会？",
    option("先查缺哪份材料", "fact", { data: 2, craft: 1 }, { process: 2 }, { banker: 2, "civil-servant": 2 }),
    option("先找能推进的人", "resource", { break: 1, result: 2 }, { execution: 2, process: 1 }, { alibaba: 1, meituan: 2, huawei: 1 }),
    option("先给对方一个台阶", "people", { craft: 1, break: -1 }, { emotion: 1, collaboration: 2 }, { tencent: 2, nio: 1 }),
    option("先做备用方案", "experiment", { break: 1, result: 1 }, { risk: 1, execution: 1 }, { xiaomi: 1, tesla: 1, bytedance: 1 })),
  q("内容包装", "同一个内容要发给不同对象，你会？",
    option("先分清各自关心什么", "fact", { data: 1, craft: 1 }, { packaging: 1, report: 1 }, { bytedance: 1, teacher: 1 }),
    option("先找最能打的卖点", "story", { result: 2, break: 1 }, { packaging: 2 }, { loreal: 2, popmart: 2, alibaba: 1 }),
    option("先做一版稳定模板", "explain", { craft: 1, data: 1 }, { education: 1, process: 1 }, { tencent: 1, apple: 1, banker: 1 }),
    option("先确认哪些不能说", "risk", { break: -1, data: 1 }, { risk: 2, process: 1 }, { "civil-servant": 2, banker: 2, doctor: 1 })),
  q("服务对象", "客户/用户说“我就要现在”，你会？",
    option("先判断是不是真紧急", "risk", { data: 2, result: 1 }, { service: 2, risk: 1 }, { doctor: 2, banker: 1, "civil-servant": 1 }),
    option("先给一个明确时间点", "boundary", { result: 2, data: 1 }, { service: 1, execution: 1 }, { meituan: 2, huawei: 1 }),
    option("先安抚对方感受", "people", { craft: 1, break: -1 }, { emotion: 2, service: 1 }, { nio: 3, teacher: 1 }),
    option("先用最小方案止血", "experiment", { break: 2, result: 1 }, { service: 1, execution: 2 }, { tesla: 1, bytedance: 1, xiaomi: 1 })),
  q("协作", "你发现别人没做，不是不会，是根本没理解，你会？",
    option("先把关键步骤写出来", "explain", { data: 1, craft: 1 }, { education: 2, collaboration: 1 }, { teacher: 3, bytedance: 1 }),
    option("先问他卡在哪一步", "people", { craft: 1, data: 1 }, { emotion: 1, collaboration: 2 }, { tencent: 1, nio: 1, teacher: 2 }),
    option("先重新分配责任", "boundary", { result: 2, data: 1 }, { collaboration: 1, process: 1 }, { huawei: 2, "civil-servant": 1 }),
    option("先换一种更简单的做法", "experiment", { break: 1, result: 1 }, { execution: 1, education: 1 }, { xiaomi: 2, meituan: 1 })),
  q("风险", "现场要你立刻表态，但信息明显不全，你会？",
    option("先说还缺哪些信息", "fact", { data: 2, craft: 1 }, { risk: 2, report: 1 }, { dji: 2, doctor: 1 }),
    option("先给一个有条件判断", "boundary", { data: 1, result: 1 }, { risk: 1, process: 1 }, { banker: 2, "civil-servant": 1 }),
    option("先给方向不说死", "people", { craft: 1, break: -1 }, { report: 1, emotion: 1 }, { tencent: 2, nio: 1 }),
    option("先拍一个小步试试", "experiment", { break: 2, result: 1 }, { execution: 2 }, { tesla: 2, bytedance: 1 })),
  q("复盘", "事情没做好，但大家都在讲客观原因，你会？",
    option("先把可控项挑出来", "fact", { data: 2, result: 1 }, { risk: 1, execution: 1 }, { bytedance: 2, dji: 1 }),
    option("先明确下一轮怎么做", "experiment", { break: 1, result: 2 }, { execution: 2 }, { meituan: 2, xiaomi: 1 }),
    option("先让复盘别变批斗", "people", { craft: 1, break: -1 }, { emotion: 2, collaboration: 1 }, { teacher: 2, tencent: 1 }),
    option("先把结论写得稳妥", "risk", { break: -1, data: 1 }, { process: 2, report: 1 }, { "civil-servant": 2, banker: 1 })),
  q("内容包装", "你觉得一个东西好，但别人完全没感觉，你会？",
    option("先找真实使用反馈", "fact", { data: 2, craft: 1 }, { service: 1, packaging: 1 }, { bytedance: 1, dji: 1 }),
    option("先换一个更有画面的说法", "story", { craft: 2, break: 1 }, { packaging: 2 }, { popmart: 3, loreal: 2 }),
    option("先拆它到底解决什么痛点", "explain", { data: 1, result: 1 }, { education: 1, packaging: 1 }, { teacher: 1, alibaba: 1 }),
    option("先判断这群人是不是目标对象", "boundary", { data: 1, result: 1 }, { service: 1, risk: 1 }, { banker: 1, apple: 1 })),
  q("制度流程", "规则和效率冲突了，你会更倾向？",
    option("先看违规成本多大", "risk", { data: 2, break: -1 }, { risk: 2, process: 1 }, { banker: 3, doctor: 1 }),
    option("先找有没有灰度路径", "resource", { break: 1, result: 1 }, { process: 1, execution: 1 }, { alibaba: 1, tencent: 1 }),
    option("先保证交付别断", "experiment", { result: 2, break: 1 }, { execution: 2 }, { meituan: 2, huawei: 1 }),
    option("先按流程留好痕", "boundary", { break: -2, data: 1 }, { process: 2, risk: 1 }, { "civil-servant": 3, banker: 1 })),
  q("临场判断", "事情突然变成公开场合，你会？",
    option("先确认事实有没有错", "fact", { data: 2, craft: 1 }, { report: 1, risk: 1 }, { dji: 2, doctor: 1 }),
    option("先把主叙事立住", "story", { craft: 1, result: 1 }, { report: 2, packaging: 1 }, { alibaba: 2, loreal: 1 }),
    option("先控制现场情绪", "people", { craft: 1, break: -1 }, { emotion: 2 }, { tencent: 2, nio: 2, teacher: 1 }),
    option("先统一对外口径", "risk", { break: -2, data: 1 }, { process: 2, risk: 1 }, { "civil-servant": 3, banker: 2 })),
  q("协作", "你发现大家目标一致，但语言完全不通，你会？",
    option("先建一个共同词表", "explain", { data: 1, craft: 1 }, { education: 2, collaboration: 1 }, { teacher: 2, bytedance: 1 }),
    option("先用案例对齐理解", "people", { craft: 1, data: 1 }, { collaboration: 2 }, { tencent: 2, nio: 1 }),
    option("先把利益关系画出来", "resource", { result: 1, break: 1 }, { collaboration: 1, execution: 1 }, { alibaba: 2, meituan: 1 }),
    option("先明确不能误解的边界", "boundary", { data: 1, break: -1 }, { risk: 1, process: 1 }, { banker: 2, "civil-servant": 1 })),
  q("汇报", "你的方案被说“不够打动人”，你会？",
    option("先确认事实够不够硬", "fact", { data: 2, craft: 1 }, { report: 1, risk: 1 }, { dji: 2, bytedance: 1 }),
    option("先换成用户听得懂的话", "explain", { craft: 1, result: 1 }, { report: 1, education: 1 }, { teacher: 2, tencent: 1 }),
    option("先补一个更强的故事钩子", "story", { craft: 2, break: 1 }, { packaging: 2, report: 1 }, { loreal: 2, popmart: 2 }),
    option("先问评价标准是什么", "boundary", { data: 1, result: 1 }, { process: 1, report: 1 }, { banker: 1, "civil-servant": 1 })),
  q("服务对象", "别人把抱怨倒给你，但你解决不了根因，你会？",
    option("先确认哪些是真问题", "fact", { data: 2, result: 1 }, { service: 1, risk: 1 }, { doctor: 2, dji: 1 }),
    option("先给出能做的部分", "boundary", { result: 2, data: 1 }, { service: 2, process: 1 }, { banker: 1, meituan: 1, "civil-servant": 1 }),
    option("先接住情绪再转走", "people", { craft: 1, break: -1 }, { emotion: 2, service: 2 }, { nio: 3, teacher: 1, tencent: 1 }),
    option("先找资源试着绕一下", "resource", { break: 1, result: 1 }, { service: 1, execution: 1 }, { alibaba: 1, xiaomi: 1 })),
  q("高压", "你手上活很多，又来了个“顺手帮忙”，你会？",
    option("先看优先级和影响", "risk", { data: 2, result: 1 }, { risk: 1, execution: 1 }, { bytedance: 1, doctor: 1 }),
    option("先说清楚我能帮到哪", "boundary", { data: 1, result: 1 }, { process: 1, collaboration: 1 }, { banker: 1, huawei: 1 }),
    option("先帮他找更合适的人", "resource", { break: 1, craft: 1 }, { collaboration: 2 }, { tencent: 2, alibaba: 1 }),
    option("先接下来，晚点再崩溃", "people", { craft: 1, result: 1 }, { emotion: 1, execution: 1 }, { teacher: 1, nio: 1, meituan: 1 })),
  q("解释", "你要教别人一个新流程，你会？",
    option("先讲为什么要这么做", "explain", { craft: 1, data: 1 }, { education: 2 }, { teacher: 3, loreal: 1 }),
    option("先给标准模板照着填", "boundary", { data: 1, result: 1 }, { process: 2, education: 1 }, { "civil-servant": 2, banker: 1, bytedance: 1 }),
    option("先让他做一遍再改", "experiment", { break: 1, result: 1 }, { education: 2, execution: 1 }, { bytedance: 1, xiaomi: 1 }),
    option("先提醒最容易出错的点", "risk", { data: 1, craft: 1 }, { risk: 2, education: 1 }, { doctor: 2, dji: 1 })),
  q("总结", "一天结束，你最想知道什么？",
    option("今天到底学到了什么", "fact", { data: 2, craft: 1 }, { report: 1 }, { dji: 2, apple: 1, bytedance: 1 }),
    option("明天谁来推进哪件事", "explain", { result: 2, data: 1 }, { execution: 2 }, { huawei: 2, meituan: 1, teacher: 1 }),
    option("大家心里是不是舒服点", "people", { craft: 1, break: -1 }, { emotion: 2 }, { nio: 2, tencent: 2 }),
    option("有没有留下不该留的坑", "risk", { data: 1, break: -1 }, { risk: 2, process: 1 }, { banker: 2, "civil-servant": 2, doctor: 1 })),
];

function q(chapter, text, ...options) {
  return { id: `q${nextQuestionId++}`, chapter, text, options };
}

const app = document.querySelector("#app");
const anonymousId = getStoredId("companysona-anonymous-id");

let state = {
  step: "home",
  index: 0,
  answers: Array(questions.length).fill(null),
  result: null,
  feedback: null,
  sessionId: getSessionId(),
  startedAt: null,
};

function track(event, payload = {}) {
  const versionedPayload = {
    app_version: APP_VERSION,
    content_version: CONTENT_VERSION,
    ...payload,
  };
  const record = {
    event,
    payload: versionedPayload,
    at: new Date().toISOString(),
    anonymousId,
    sessionId: state.sessionId,
    path: location.pathname,
    hash: location.hash,
    source: getSource(),
  };
  const events = safeParse(localStorage.getItem("companysona-events"), []);
  events.push(record);
  localStorage.setItem("companysona-events", JSON.stringify(events.slice(-200)));
  sendSupabaseEvent(record);
}

function safeParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function getStoredId(key) {
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const next = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  localStorage.setItem(key, next);
  return next;
}

function getSessionId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getSource() {
  const params = new URLSearchParams(location.search);
  return {
    ref: params.get("ref") || params.get("source") || null,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
  };
}

function sendSupabaseEvent(record) {
  const body = {
    event_name: record.event,
    anonymous_id: record.anonymousId,
    session_id: record.sessionId,
    result_slug: record.payload?.result || null,
    payload: record.payload,
    source: record.source,
    path: record.path,
    hash: record.hash,
    user_agent: navigator.userAgent,
    client_created_at: record.at,
  };

  fetch(`${analyticsConfig.supabaseUrl}/rest/v1/${analyticsConfig.table}`, {
    method: "POST",
    headers: {
      apikey: analyticsConfig.publishableKey,
      Authorization: `Bearer ${analyticsConfig.publishableKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(body),
    keepalive: true,
  }).catch(() => {
    const pending = safeParse(localStorage.getItem("companysona-pending-events"), []);
    pending.push(body);
    localStorage.setItem("companysona-pending-events", JSON.stringify(pending.slice(-100)));
  });
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
          <p class="subtitle">25 个真实职场瞬间，看你像哪种大厂或社会职业人格。</p>
          <button class="primary-action" data-action="start">进入 V2 测试</button>
          <p class="microcopy">飞书文档、抓手颗粒度、材料口径和“领导一句话全改了”，都在题里。</p>
        </div>
        <div class="hero-visual">
          <div class="persona-stage">
            <div class="orbit-card">飞书 doc</div>
            <div class="orbit-card">抓手</div>
            <div class="orbit-card">PPT 氛围</div>
            <div class="orbit-card">材料口径</div>
            <div class="signal">V2</div>
            ${avatarMarkup("V2")}
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
        <div class="brand">Companysona V2</div>
        <div class="progress-text">${state.index + 1} / ${questions.length}</div>
      </div>
      <div class="progress-track"><div class="progress-bar" style="width:${progress}%"></div></div>
      <article class="question-card">
        <div class="chapter">${question.chapter}</div>
        <h2>${question.text}</h2>
        <div class="options">
          ${question.options
            .map(
              (item, index) => `
                <button class="option ${state.answers[state.index] === index ? "is-selected" : ""}" data-answer="${index}">
                  ${item.label}
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
        <div class="brand">Companysona V2</div>
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
  const scores = { data: 50, break: 50, result: 50, craft: 50 };
  const bonus = Object.fromEntries(companies.map((company) => [company.id, 0]));
  const scenes = {};

  state.answers.forEach((answerIndex, questionIndex) => {
    const answer = questions[questionIndex].options[answerIndex];
    if (!answer) return;
    Object.entries(answer.dimensions).forEach(([key, value]) => {
      scores[key] += value * 4.2;
    });
    Object.entries(answer.scene).forEach(([key, value]) => {
      scenes[key] = (scenes[key] || 0) + value;
    });
    Object.entries(answer.bonus).forEach(([key, value]) => {
      bonus[key] = (bonus[key] || 0) + value;
    });
  });

  Object.keys(scores).forEach((key) => {
    scores[key] = Math.max(0, Math.min(100, Math.round(scores[key])));
  });

  let best = companies[0];
  let bestScore = Number.NEGATIVE_INFINITY;
  companies.forEach((company) => {
    const distance = Object.keys(scores).reduce((sum, key) => {
      return sum + Math.pow(scores[key] - company.scores[key], 2);
    }, 0);
    const similarityScore = 100 - Math.sqrt(distance) / 2;
    const sceneScore = getSceneScore(company.id, scenes);
    const total = similarityScore + sceneScore * 1.8 + (bonus[company.id] || 0) * 5.5;
    if (total > bestScore) {
      best = company;
      bestScore = total;
    }
  });

  const match = Math.max(68, Math.min(98, Math.round(bestScore)));
  return {
    ...best,
    dimensions: scores,
    scenes,
    bonus,
    match,
    resultId: `${best.id}-${Date.now().toString(36)}`,
  };
}

function getSceneScore(companyId, scenes) {
  const profile = sceneProfiles[companyId] || {};
  return Object.entries(scenes).reduce((sum, [scene, value]) => {
    return sum + value * (profile[scene] || 0);
  }, 0);
}

function resultFromHash() {
  const id = location.hash.replace("#", "");
  if (!id) return null;
  const company = companies.find((item) => item.id === id);
  if (!company) return null;
  return {
    ...company,
    dimensions: company.scores,
    scenes: {},
    bonus: {},
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
    scenes: state.result.scenes,
    bonus: state.result.bonus,
    duration_ms: state.startedAt ? Date.now() - state.startedAt : null,
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
  ctx.fillText("Companysona V2", 150, 210);
  ctx.font = "800 36px sans-serif";
  ctx.fillText("测测你的大厂人格", 150, 270);
  ctx.font = "900 118px sans-serif";
  ctx.fillText(result.company, 150, 470);
  ctx.font = "900 60px sans-serif";
  drawWrappedText(ctx, result.name, 150, 560, 780, 68);
  ctx.font = "800 38px sans-serif";
  ctx.fillText(`厂牌共振指数 ${result.match}%`, 150, 700);
  drawWrappedText(ctx, result.quote, 150, 820, 780, 58);
  drawAvatar(ctx, result, 540, 1080);
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
    state.sessionId = getSessionId();
    state.startedAt = Date.now();
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
    state = {
      step: "home",
      index: 0,
      answers: Array(questions.length).fill(null),
      result: null,
      feedback: null,
      sessionId: getSessionId(),
      startedAt: null,
    };
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
} else {
  track("page_view");
}

render();
