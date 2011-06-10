$WowheadTalentCalculator.registerClass(1, [
{
	n: 'Оружие',
	color: '#FFB81A',
	role: 8,
	mastery: {
		description: 'Закаленный в битвах мастер владения двуручным оружием. В бою полагается на скорость и мощные удары.',
		spells: [
			{id:12294,name:'Смертельный удар',icon:'ability_warrior_savageblow'},
			{id:12296,name:'Управление злостью',icon:'ability_warrior_endlessrage'},
			{id:12712,name:'Специализация на двуручном оружии',icon:'inv_axe_09'}
		],
		rating: [
			{id:76838,name:'Удача в бою',description:'<!--sp76838:0-->После атаки ближнего боя вы с вероятностью 17.6% мгновенно сделаете дополнительный выпад, наносящий 100% от обычного урона. Каждое очко искусности повышает вероятность на 2.2%.<!--sp76838-->'}
		]
	},
	icon: 'ability_warrior_savageblow',
	t: [
	{
		i: 10134,
		n: 'Военная наука',
		m: 3,
		s: [84570,84571,84572],
		d: [
			'Увеличивает урон, наносимый способностями "Смертельный удар", "Яростный выпад", "Сокрушение", "Победный раж" и "Мощный удар", на 5%.',
			'Увеличивает урон, наносимый способностями "Смертельный удар", "Яростный выпад", "Сокрушение", "Победный раж" и "Мощный удар", на 10%.',
			'Увеличивает урон, наносимый способностями "Смертельный удар", "Яростный выпад", "Сокрушение", "Победный раж" и "Мощный удар", на 15%.'
		],
		x: 0,
		y: 0
	},
	{
		i: 11163,
		n: 'Полевые навыки',
		m: 2,
		s: [84579,84580],
		d: [
			'Усиливает ваши способности исцеления себя на 10%, а все эффекты исцеления, накладываемые на вас – на 3%.',
			'Усиливает ваши способности исцеления себя на 20%, а все эффекты исцеления, накладываемые на вас – на 6%.'
		],
		j: [
			{_healpct:3},
			{_healpct:6}
		],
		x: 1,
		y: 0
	},
	{
		i: 9664,
		n: 'Блиц',
		m: 2,
		s: [80976,80977],
		d: [
			'"Рывок" повышает уровень ярости еще на 5 ед. и оглушает дополнительную находящуюся поблизости цель.',
			'"Рывок" повышает уровень ярости еще на 10 ед. и оглушает 2 дополнительную находящуюся поблизости цель.'
		],
		x: 2,
		y: 0
	},
	{
		i: 11416,
		n: 'Тактическое превосходство',
		m: 2,
		s: [12295,12676],
		d: [
			'При смене боевой стойки вы дополнительно сохраняете до 25 ед. ярости.',
			'При смене боевой стойки вы дополнительно сохраняете до 50 ед. ярости.'
		],
		x: 0,
		y: 1
	},
	{
		i: 8190,
		n: 'Второе дыхание',
		m: 2,
		s: [29834,29838],
		d: [
			'Находясь под действием эффектов оглушения или обездвиживания вы накапливаете 10 ед. ярости и восстанавливаете 2% от общего запаса здоровья в течение 10 сек.',
			'Находясь под действием эффектов оглушения или обездвиживания вы накапливаете 20 ед. ярости и восстанавливаете 5% от общего запаса здоровья в течение 10 сек.'
		],
		x: 1,
		y: 1
	},
	{
		i: 8176,
		n: 'Глубокие раны',
		m: 3,
		s: [12834,12849,12867],
		d: [
			'Ваши критические удары вызывают у противника кровотечение, наносящее 16% от среднего урона вашего оружия ближнего боя за 6 сек.',
			'Ваши критические удары вызывают у противника кровотечение, наносящее 32% от среднего урона вашего оружия ближнего боя за 6 сек.',
			'Ваши критические удары вызывают у противника кровотечение, наносящее 48% от среднего урона вашего оружия ближнего боя за 6 сек.'
		],
		x: 2,
		y: 1
	},
	{
		i: 8184,
		n: 'Барабаны войны',
		m: 2,
		s: [12290,12963],
		d: [
			'На 50% уменьшает затраты ярости на способности "Зуботычина", "Деморализующий крик", "Устрашающий крик" и "Вызывающий крик".',
			'На 100% уменьшает затраты ярости на способности "Зуботычина", "Деморализующий крик", "Устрашающий крик" и "Вызывающий крик".'
		],
		x: 3,
		y: 1
	},
	{
		i: 10138,
		n: 'Вкус крови',
		m: 3,
		s: [56636,56637,56638],
		d: [
			'Повышает вероятность критического эффекта способности "Превосходство" на 20%. Кроме того, при нанесении урона способностью "Кровопускание" вы с вероятностью 33% получаете возможность в течение 9 сек. однократно воспользоваться способностью "Превосходство". Эффект срабатывает не чаще одного раза в 5 сек.',
			'Повышает вероятность критического эффекта способности "Превосходство" на 40%. Кроме того, при нанесении урона способностью "Кровопускание" вы с вероятностью 66% получаете возможность в течение 9 сек. однократно воспользоваться способностью "Превосходство". Эффект срабатывает не чаще одного раза в 5 сек.',
			'Повышает вероятность критического эффекта способности "Превосходство" на 60%. Кроме того, при нанесении урона способностью "Кровопускание" вы с вероятностью 100% получаете возможность в течение 9 сек. однократно воспользоваться способностью "Превосходство". Эффект срабатывает не чаще одного раза в 5 сек.'
		],
		x: 0,
		y: 2
	},
	{
		i: 8192,
		n: 'Размашистые удары',
		m: 1,
		s: [12328],
		d: [
			'Cледующие атаки ближнего боя также поразят находящегося рядом с выбранной целью противника. Время действия – 10 сек.'
		],
		t: ['30 Ярость<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 1 мин</th></tr></table>','Требуется: Боевая стойка, Стойка берсерка'],
		x: 1,
		y: 2
	},
	{
		i: 10741,
		n: 'Прокалывание',
		m: 2,
		s: [16493,16494],
		d: [
			'Увеличивает дополнительный урон от критических ударов, нанесенных при применении способностей "Смертельный удар", "Мощный удар" и "Превосходство", на 10%.',
			'Увеличивает дополнительный урон от критических ударов, нанесенных при применении способностей "Смертельный удар", "Мощный удар" и "Превосходство", на 20%.'
		],
		x: 2,
		y: 2,
		r: [5,3]
	},
	{
		i: 11417,
		n: 'Улучшенное подрезание сухожилий',
		m: 2,
		s: [12289,12668],
		d: [
			'Повторное применение способности "Подрезать сухожилия" обездвижит противника на 5 сек. Эффект срабатывает не чаще чем раз в 60 сек. Кроме того, время восстановления способности "Подрезать сухожилия" снижается на 0.2 сек.',
			'Повторное применение способности "Подрезать сухожилия" обездвижит противника на 5 сек. Эффект срабатывает не чаще чем раз в 30 сек. Кроме того, время восстановления способности "Подрезать сухожилия" снижается на 0 сек.'
		],
		x: 3,
		y: 2
	},
	{
		i: 11418,
		n: 'Умелый мощный удар',
		m: 2,
		s: [86655,12330],
		d: [
			'Сокращает время применения способности "Мощный удар" на 0 сек. и повышает наносимый ударом урон на 10%.',
			'Сокращает время применения способности "Мощный удар" на 1 сек. и повышает наносимый ударом урон на 20%.'
		],
		x: 0,
		y: 3
	},
	{
		i: 11223,
		n: 'Смертельное спокойствие',
		m: 1,
		s: [85730],
		d: [
			'В течение 10 сек. на применение ваших способностей не будет тратиться ярость, при этом вы продолжите накапливать ярость. Нельзя использовать во время действия "Внутренней ярости".'
		],
		t: ['Восстановление: 2 мин'],
		x: 1,
		y: 3
	},
	{
		i: 9662,
		n: 'Кровавое бешенство',
		m: 2,
		s: [29836,29859],
		d: [
			'Вызывающие кровотечение способности увеличивают физический урон, получаемый противником, на 2%, а урон от кровотечения – на 15% на 1 мин. Кроме того, во время автоматических атак вы с вероятностью 5% накапливаете 20 ед. ярости.',
			'Вызывающие кровотечение способности увеличивают физический урон, получаемый противником, на 4%, а урон от кровотечения – на 30% на 1 мин. Кроме того, во время автоматических атак вы с вероятностью 10% накапливаете 20 ед. ярости.'
		],
		x: 2,
		y: 3
	},
	{
		i: 10520,
		n: 'Овцы на бойне',
		m: 3,
		s: [84583,84587,84588],
		d: [
			'Способность "Смертельный удар" накладывает эффект "Избиение", который обновляет время действия способности "Кровопускание" на цели, а также увеличивает урон от способностей "Казнь", "Превосходство", "Мощный удар" и "Смертельный удар" на 10%. Время действия эффекта – 15 сек.',
			'Способность "Смертельный удар" накладывает эффект "Избиение", который обновляет время действия способности "Кровопускание" на цели, а также увеличивает урон от способностей "Казнь", "Превосходство", "Мощный удар" и "Смертельный удар" на 10%. Время действия эффекта – 15 сек. Суммируется до 2 раз.',
			'Способность "Смертельный удар" накладывает эффект "Избиение", который обновляет время действия способности "Кровопускание" на цели, а также увеличивает урон от способностей "Казнь", "Превосходство", "Мощный удар" и "Смертельный удар" на 10%. Время действия эффекта – 15 сек. Суммируется до 3 раз.'
		],
		x: 0,
		y: 4
	},
	{
		i: 8208,
		n: 'Неудержимость',
		m: 1,
		s: [64976],
		d: [
			'Способность "Рывок" теперь можно применять в бою и в любой стойке. Время ее восстановления снижено на 2 сек. Использованная в течение 10 сек. после "Рывка" способность "Мощный удар" или "Смертельный удар" с вероятностью, повышенной на 25%, нанесет критический удар. Вместе с тем, у "Рывка" теперь общее время восстановления со способностью "Перехват".'
		],
		x: 1,
		y: 4
	},
	{
		i: 8214,
		n: 'Внезапная смерть',
		m: 2,
		s: [29723,29725],
		d: [
			'Нанесение урона атаками ближнего боя с вероятностью 3% мгновенно завершает время восстановления способности "Удар колосса". Кроме того, после применения способности "Казнь" у вас сохраняется как минимум 5 ед. ярости.',
			'Нанесение урона атаками ближнего боя с вероятностью 6% мгновенно завершает время восстановления способности "Удар колосса". Кроме того, после применения способности "Казнь" у вас сохраняется как минимум 10 ед. ярости.'
		],
		x: 3,
		y: 4
	},
	{
		i: 8194,
		n: 'Погром',
		m: 2,
		s: [46867,56611],
		d: [
			'Нанося критические удары способностью "Смертельный удар", воин с вероятностью 50% входит в состояние исступления, и наносимый им урон увеличивается на 5% на 12 сек.',
			'Нанося критические удары способностью "Смертельный удар", воин с вероятностью 100% входит в состояние исступления, и наносимый им урон увеличивается на 10% на 12 сек.'
		],
		x: 0,
		y: 5
	},
	{
		i: 11167,
		n: 'Низвержение',
		m: 1,
		s: [85388],
		d: [
			'Сбивает цель с ног и оглушает ее на 5 сек.'
		],
		t: ['<table width="100%"><tr><td>15 Ярость</td><th>Дистанция ближнего боя</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 45 сек.</th></tr></table>','Требуется: Оружие ближнего боя<br />Требуется: Боевая стойка'],
		x: 2,
		y: 5,
		r: [15,1]
	},
	{
		i: 8222,
		n: 'Вихрь клинков',
		m: 1,
		s: [46924],
		d: [
			'Воин начинает кружиться в смертоносном вихре, мгновенно нанося всем находящимся поблизости противникам 150% урона от оружия, а затем продолжая наносить им удары раз в 1 сек. в течение 6 сек. Находясь под действием эффекта "Вихрь клинков", он может передвигаться, но не может использовать любые другие способности. В этом состоянии воин не чувствует ни страха, ни жалости, и только смерть или разоружение способны остановить его.'
		],
		t: ['25 Ярость<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 1.5 мин</th></tr></table>','Требуется: Оружие ближнего боя'],
		x: 1,
		y: 6,
		r: [15,1]
	}
	]
},
{
	n: 'Неистовство',
	color: '#FF0000',
	role: 8,
	mastery: {
		description: 'Неистовый берсерк, воюющий с оружием в каждой руке. Обрушивает на врага шквал ударов, способных изрубить его на куски.',
		spells: [
			{id:23881,name:'Кровожадность',icon:'spell_nature_bloodlust'},
			{id:23588,name:'Специализация на бое двумя оружиями',icon:'ability_dualwield'},
			{id:29592,name:'Точность',icon:'ability_marksmanship'}
		],
		rating: [
			{id:76856,name:'Несдерживаемая ярость',description:'<!--sp76856:0-->Действие способностей, вызывающих состояние исступления или поглощающих его эффект, усиливается на 11.2%. Каждое очко искусности усиливает действие еще на 5.60%.<!--sp76856-->'}
		]
	},
	icon: 'ability_warrior_innerrage',
	t: [
	{
		i: 9610,
		n: 'Мания крови',
		m: 3,
		s: [16487,16489,16492],
		d: [
			'10%-я вероятность восстановить 1% от максимального запаса здоровья в течение 5 сек. после получения урона.',
			'10%-я вероятность восстановить 2% от максимального запаса здоровья в течение 5 сек. после получения урона.',
			'10%-я вероятность восстановить 3% от максимального запаса здоровья в течение 5 сек. после получения урона.'
		],
		x: 0,
		y: 0
	},
	{
		i: 9606,
		n: 'Упоение боем',
		m: 3,
		s: [12322,85741,85742],
		d: [
			'После нанесения урона способностями "Кровожадность", "Смертельный удар" и "Мощный удар щитом" вы с вероятностью 5% сможете использовать следующую способность, требующую затраты более чем 5 ед. ярости, без затрат ярости.',
			'После нанесения урона способностями "Кровожадность", "Смертельный удар" и "Мощный удар щитом" вы с вероятностью 10% сможете использовать следующую способность, требующую затраты более чем 5 ед. ярости, без затрат ярости.',
			'После нанесения урона способностями "Кровожадность", "Смертельный удар" и "Мощный удар щитом" вы с вероятностью 15% сможете использовать следующую способность, требующую затраты более чем 5 ед. ярости, без затрат ярости.'
		],
		x: 1,
		y: 0
	},
	{
		i: 9608,
		n: 'Безжалостность',
		m: 2,
		s: [12320,12852],
		d: [
			'Повышает вероятность нанести критический удар способностями "Кровожадность", "Смертельный удар" и "Мощный удар щитом" на 5%.',
			'Повышает вероятность нанести критический удар способностями "Кровожадность", "Смертельный удар" и "Мощный удар щитом" на 10%.'
		],
		x: 2,
		y: 0
	},
	{
		i: 9644,
		n: 'Палач',
		m: 2,
		s: [20502,20503],
		d: [
			'При успешном применении способности "Казнь" ваша скорость ближнего боя с вероятностью 50% повысится на 5% на 9 сек. Эффект суммируется до 5 раз.',
			'При успешном применении способности "Казнь" ваша скорость ближнего боя с вероятностью 100% повысится на 5% на 9 сек. Эффект суммируется до 5 раз.'
		],
		x: 0,
		y: 1
	},
	{
		i: 9624,
		n: 'Луженая глотка',
		m: 2,
		s: [12321,12835],
		d: [
			'Сокращает время восстановления способностей "Боевой крик" и "Командирский крик" на 15 сек. Применение этих способностей дополнительно наделяет вас 5 ед. ярости.',
			'Сокращает время восстановления способностей "Боевой крик" и "Командирский крик" на 30 сек. Применение этих способностей дополнительно наделяет вас 10 ед. ярости.'
		],
		x: 1,
		y: 1
	},
	{
		i: 11415,
		n: 'Грубое прерывание',
		m: 2,
		s: [61216,61221],
		d: [
			'Успешное прерывание заклинания с помощью "Зуботычины" увеличивает наносимый вами урон на 5% на 15 сек.',
			'Успешное прерывание заклинания с помощью "Зуботычины" увеличивает наносимый вами урон на 5% на 30 сек.'
		],
		x: 2,
		y: 1
	},
	{
		i: 9618,
		n: 'Пронзительный вой',
		m: 1,
		s: [12323],
		d: [
			'Вызывает головокружение у всех противников в радиусе 10 м, снижая скорость их передвижения на 50% на 6 сек.'
		],
		t: ['10 Ярость<br />Мгновенное действие'],
		x: 3,
		y: 1
	},
	{
		i: 9636,
		n: 'Шквал',
		m: 3,
		s: [12319,12971,12972],
		d: [
			'После нанесения критического удара в ближнем бою скорость атаки для следующих трех автоматических атак повышается на 8%.',
			'После нанесения критического удара в ближнем бою скорость атаки для следующих трех автоматических атак повышается на 16%.',
			'После нанесения критического удара в ближнем бою скорость атаки для следующих трех автоматических атак повышается на 25%.'
		],
		x: 0,
		y: 2
	},
	{
		i: 9630,
		n: 'Жажда смерти',
		m: 1,
		s: [12292],
		d: [
			'Вводит воина в состояние исступления, в котором наносимый физический урон увеличивается на 20%<!--sp94374:0-->, а весь получаемый урон – на 5%<!--sp94374-->. Время действия – 30 сек.'
		],
		t: ['10 Ярость<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 3 мин</th></tr></table>'],
		x: 1,
		y: 2
	},
	{
		i: 9612,
		n: 'Исступление',
		m: 3,
		s: [12317,13045,13046],
		d: [
			'Нанося удары в ближнем бою, вы с вероятностью 3% будете впадать в состояние исступления, позволяющее наносить 3% дополнительного урона в течение 9 сек.',
			'Нанося удары в ближнем бою, вы с вероятностью 6% будете впадать в состояние исступления, позволяющее наносить 7% дополнительного урона в течение 9 сек.',
			'Нанося удары в ближнем бою, вы с вероятностью 9% будете впадать в состояние исступления, позволяющее наносить 10% дополнительного урона в течение 9 сек.'
		],
		x: 2,
		y: 2
	},
	{
		i: 11414,
		n: 'Бой насмерть',
		m: 2,
		s: [81913,81914],
		d: [
			'Повышает вероятность парирования на 100% на 4 сек., когда ваш запас здоровья падает до 20% или ниже. Эффект не может накладываться чаще, чем раз в 2 мин.',
			'Повышает вероятность парирования на 100% на 8 сек., когда ваш запас здоровья падает до 20% или ниже. Эффект не может накладываться чаще, чем раз в 2 мин.'
		],
		x: 0,
		y: 3
	},
	{
		i: 11208,
		n: 'Яростный выпад',
		m: 1,
		s: [85288],
		d: [
			'Наносит <!--ppl39:80:72:68-->100% урона от оружия ближнего боя в каждой руке. Способность можно использовать только в состоянии исступления.'
		],
		t: ['<table width="100%"><tr><td>20 Ярость</td><th>Дистанция ближнего боя</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 6 сек.</th></tr></table>','Требуется: Оружие ближнего боя<br />Требуется: Стойка берсерка'],
		x: 1,
		y: 3,
		r: [8,1]
	},
	{
		i: 9650,
		n: 'Буйство',
		m: 1,
		s: [29801],
		d: [
			'Повышает вероятность нанесения критических ударов всеми участниками группы или рейда в радиусе 100 м на 5%, а вашу вероятность нанесения критического удара – дополнительно на 2%.'
		],
		j: [
			{mlecritstrkpct:2,rgdcritstrkpct:2,mlecritstrkpct:5,rgdcritstrkpct:5,holsplcritstrkpct:5,firsplcritstrkpct:5,natsplcritstrkpct:5,frosplcritstrkpct:5,shasplcritstrkpct:5,arcsplcritstrkpct:5}
		],
		x: 2,
		y: 3,
		r: [11,1]
	},
	{
		i: 9648,
		n: 'Неистовство героя',
		m: 1,
		s: [60970],
		d: [
			'Рассеивает любые обездвиживающие эффекты и мгновенно завершает восстановление способности "Перехват".'
		],
		t: ['Восстановление: 30 сек.'],
		x: 3,
		y: 3
	},
	{
		i: 9634,
		n: 'Яростные атаки',
		m: 1,
		s: [46910],
		d: [
			'Ваши автоматические атаки с некоторой вероятностью могут снизить эффективность направленных на цель исцеляющих заклинаний на 10% на 10 сек.'
		],
		x: 0,
		y: 4
	},
	{
		i: 9642,
		n: 'Кровавый фарш',
		m: 2,
		s: [12329,12950],
		d: [
			'После применения способностей "Рассекающий удар" и "Вихрь" урон от следующего их применения увеличивается на 5% на 10 сек. Эффект суммируется до 3 раз.',
			'После применения способностей "Рассекающий удар" и "Вихрь" урон от следующего их применения увеличивается на 10% на 10 сек. Эффект суммируется до 3 раз.'
		],
		x: 2,
		y: 4
	},
	{
		i: 10743,
		n: 'Интенсивная ярость',
		m: 2,
		s: [46908,46909],
		d: [
			'Сокращает время восстановления способностей "Ярость берсерка", "Безрассудство" и "Жажда смерти" на 10%.',
			'Сокращает время восстановления способностей "Ярость берсерка", "Безрассудство" и "Жажда смерти" на 20%.'
		],
		x: 3,
		y: 4
	},
	{
		i: 9654,
		n: 'Прилив крови',
		m: 3,
		s: [46913,46914,46915],
		d: [
			'С вероятностью 10% после нанесения урона способностью "Кровожадность" в течение 10 сек. вы сможете мгновенно и без затрат ярости применить способность "Мощный удар", которая нанесет на 20% больше урона.',
			'С вероятностью 20% после нанесения урона способностью "Кровожадность" в течение 10 сек. вы сможете мгновенно и без затрат ярости применить способность "Мощный удар", которая нанесет на 20% больше урона.',
			'С вероятностью 30% после нанесения урона способностью "Кровожадность" в течение 10 сек. вы сможете мгновенно и без затрат ярости применить способность "Мощный удар", которая нанесет на 20% больше урона.'
		],
		x: 1,
		y: 5,
		r: [11,1]
	},
	{
		i: 10744,
		n: 'Вояка',
		m: 2,
		s: [29888,29889],
		d: [
			'Сокращает время восстановления способности "Перехват" на 5 сек., а время восстановления способности "Героический прыжок" – на 10 сек.',
			'Сокращает время восстановления способности "Перехват" на 10 сек., а время восстановления способности "Героический прыжок" – на 20 сек.'
		],
		x: 2,
		y: 5
	},
	{
		i: 9658,
		n: 'Хватка титана',
		m: 1,
		s: [46917],
		d: [
			'Позволяет держать двуручное дробящее оружие, двуручные топоры или мечи в одной руке.'
		],
		x: 1,
		y: 6
	},
	{
		i: 9660,
		n: 'Единство намерений',
		m: 1,
		s: [81099],
		d: [
			'Если у воина в каждой руке находится одноручное оружие, наносимый им урон увеличивается на 20%, а "Мощный удар" воин наносит с обеих рук.'
		],
		j: [
			{mledmgpct:[20,'forClass',[2,43153,1]],holdmgpct:[20,'forClass',[2,43153,1]],firdmgpct:[20,'forClass',[2,43153,1]],natdmgpct:[20,'forClass',[2,43153,1]],frodmgpct:[20,'forClass',[2,43153,1]],shadmgpct:[20,'forClass',[2,43153,1]],arcdmgpct:[20,'forClass',[2,43153,1]]}
		],
		x: 2,
		y: 6
	}
	]
},
{
	n: 'Защита',
	color: '#4D80FF',
	role: 2,
	mastery: {
		description: 'Использует щит для защиты себя и своих союзников от вражеских атак.',
		spells: [
			{id:23922,name:'Мощный удар щитом',icon:'inv_shield_05'},
			{id:29144,name:'Живучесть',icon:'inv_helmet_21'},
			{id:93098,name:'Отмщение',icon:'ability_paladin_shieldofvengeance'}
		],
		rating: [
			{id:76857,name:'Критический блок',description:'<!--sp76857:0-->Вероятность блокировать удар повышается на 12% а вероятность критического блока – на 12%. Каждое очко искусности дополнительно повышает вероятность блока на 1.5% и критического блока на 1.5%.<!--sp76857-->'}
		]
	},
	icon: 'ability_warrior_defensivestance',
	t: [
	{
		i: 10464,
		n: 'Побуждение',
		m: 3,
		s: [50685,50686,50687],
		d: [
			'Повышает вероятность критического эффекта способности "Удар героя" на 5%. Также, если вы наносите этой способностью критический удар, следующий "Удар героя" с вероятностью 33% тоже будет критическим, но не вызовет продления эффекта.',
			'Повышает вероятность критического эффекта способности "Удар героя" на 10%. Также, если вы наносите этой способностью критический удар, следующий "Удар героя" с вероятностью 66% тоже будет критическим, но не вызовет продления эффекта.',
			'Повышает вероятность критического эффекта способности "Удар героя" на 15%. Также, если вы наносите этой способностью критический удар, следующий "Удар героя" с вероятностью 100% тоже будет критическим, но не вызовет продления эффекта.'
		],
		x: 0,
		y: 0
	},
	{
		i: 10474,
		n: 'Крепость',
		m: 3,
		s: [12299,12761,12762],
		d: [
			'Увеличивает показатель брони, получаемый за счет предметов, на 3%.',
			'Увеличивает показатель брони, получаемый за счет предметов, на 6%.',
			'Увеличивает показатель брони, получаемый за счет предметов, на 10%.'
		],
		j: [
			{armor:[3/100,'forSlots',[0,2,4,7,8,9,10,11,17]]},
			{armor:[6/100,'forSlots',[0,2,4,7,8,9,10,11,17]]},
			{armor:[10/100,'forSlots',[0,2,4,7,8,9,10,11,17]]}
		],
		x: 1,
		y: 0
	},
	{
		i: 10480,
		n: 'Кровь и гром',
		m: 2,
		s: [84614,84615],
		d: [
			'Применяя способность "Удар грома" против цели, пораженной вашей способностью "Кровопускание", вы с вероятностью 50% сделаете "Кровопускание" всем целям, находящимся в области действия "Удара грома".',
			'Применяя способность "Удар грома" против цели, пораженной вашей способностью "Кровопускание", вы с вероятностью 100% сделаете "Кровопускание" всем целям, находящимся в области действия "Удара грома".'
		],
		x: 2,
		y: 0
	},
	{
		i: 10466,
		n: 'Специализация на щитах',
		m: 3,
		s: [12298,12724,12725],
		d: [
			'Вы накапливаете 5 ед. ярости при блокировании атаки, и 20 ед. ярости при срабатывании способности "Отражение заклинания".',
			'Вы накапливаете 10 ед. ярости при блокировании атаки, и 40 ед. ярости при срабатывании способности "Отражение заклинания".',
			'Вы накапливаете 15 ед. ярости при блокировании атаки, и 60 ед. ярости при срабатывании способности "Отражение заклинания".'
		],
		x: 0,
		y: 1
	},
	{
		i: 10472,
		n: 'Мастерское владение щитом',
		m: 3,
		s: [29598,84607,84608],
		d: [
			'Сокращает время восстановления способности "Блок щитом" на 10 сек., а способности "Глухая оборона" – на 60 сек. Кроме того, "Блок щитом" уменьшает получаемый урон от заклинаний на 7% на 6 сек.',
			'Сокращает время восстановления способности "Блок щитом" на 20 сек., а способности "Глухая оборона" - на 120 сек. Кроме того, "Блок щитом" в течение 6 сек уменьшает получаемый урон от заклинаний на 14%.',
			'Сокращает время восстановления способности "Блок щитом" на 30 сек., а способности "Глухая оборона" – на 180 сек. Кроме того, "Блок щитом" в течение 6 сек уменьшает получаемый урон от заклинаний на 20%.'
		],
		x: 1,
		y: 1
	},
	{
		i: 11170,
		n: 'Дисциплина защитника',
		m: 2,
		s: [84604,84621],
		d: [
			'После успешного парирования вероятность критического удара и критического блока повышается на 10% на 5 сек.',
			'После успешного парирования вероятность критического удара и критического блока повышается на 10% на 10 сек.'
		],
		x: 2,
		y: 1
	},
	{
		i: 10468,
		n: 'Приказ молчания',
		m: 2,
		s: [12311,12958],
		d: [
			'Когда вы используете способности "Героический бросок" и "Зуботычина", ваш противник с вероятностью 50% теряет способность произносить заклинания на 3 сек. Кроме того, время восстановления способности "Героический бросок" сокращается на 15 сек.',
			'Когда вы используете способности "Героический бросок" и "Зуботычина", ваш противник с вероятностью 100% теряет способность произносить заклинания на 3 сек. Кроме того, время восстановления способности "Героический бросок" сокращается на 30 сек.'
		],
		x: 3,
		y: 1
	},
	{
		i: 10482,
		n: 'Ни шагу назад',
		m: 1,
		s: [12975],
		d: [
			'Увеличение максимального запаса здоровья на 30% на 20 сек. После окончания действия эффекта максимальный запас здоровья принимает прежнее значение.'
		],
		t: ['Восстановление: 3 мин'],
		x: 0,
		y: 2
	},
	{
		i: 10478,
		n: 'Оглушающий удар',
		m: 1,
		s: [12809],
		d: [
			'Оглушает противника на 5 сек. и наносит (75 / 100 * <span class="w"> AP</span>) ед. урона (величина урона зависит от силы атаки).'
		],
		t: ['<table width="100%"><tr><td>15 Ярость</td><th>Дистанция ближнего боя</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 30 сек.</th></tr></table>','Требуется: Оружие ближнего боя'],
		x: 1,
		y: 2
	},
	{
		i: 10934,
		n: 'Живая крепость',
		m: 2,
		s: [29593,29594],
		d: [
			'Если вы находитесь в оборонительной стойке, вероятность получить критический удар от атаки ближнего боя понижается на 3%. При блокировании, парировании или уклонении от атаки с вероятностью 10% вы впадаете в состояние исступления, в котором наносимый вами физический урон увеличивается на 5% на 12 сек.',
			'Если вы находитесь в оборонительной стойке, вероятность получить критический удар от атаки ближнего боя понижается на 6%. При блокировании, парировании или уклонении от атаки с вероятностью 20% вы впадаете в состояние исступления, в котором наносимый вами физический урон увеличивается на 10% на 12 сек.'
		],
		j: [
			{_mlecritstrkpct:[-3,'forStance','131072']},
			{_mlecritstrkpct:[-6,'forStance','131072']}
		],
		x: 2,
		y: 2
	},
	{
		i: 10494,
		n: 'Вестник войны',
		m: 1,
		s: [57499],
		d: [
			'Позволяет применять способности "Рывок", "Перехват" и "Вмешательство" во время боя в любой стойке. Кроме того, способность "Вмешательство" снимает все затрудняющие передвижение эффекты.'
		],
		x: 3,
		y: 2
	},
	{
		i: 10470,
		n: 'Улучшенный реванш',
		m: 2,
		s: [12797,12799],
		d: [
			'Увеличивает урон от способности "Реванш" на 30%, кроме того способность будет наносить 50% урона дополнительной цели.',
			'Увеличивает урон от способности "Реванш" на 60%, кроме того способность будет наносить урон дополнительной цели.'
		],
		x: 0,
		y: 3
	},
	{
		i: 10486,
		n: 'Сокрушение',
		m: 1,
		s: [20243],
		d: [
			'Удар, повреждающий доспех противника и накладывающий эффект "Раскол брони". Удар также наносит <!--ppl39:80:109:100-->150% урона от оружия и по <!--pts2-->854<!----> ед. урона за каждый действующий эффект "Раскол брони". Этот эффект может суммироваться до 3 раз.'
		],
		t: ['<table width="100%"><tr><td>15 Ярость</td><th>Дистанция ближнего боя</th></tr></table>Мгновенное действие<!--?20243:25:85:85:135:0:1000-->','Требуется: Щиты'],
		x: 2,
		y: 3
	},
	{
		i: 11217,
		n: 'Верная победа',
		m: 2,
		s: [80128,80129],
		d: [
			'После применения способности "Сокрушение" к цели с 20% здоровья или менее воин с вероятностью 25% сможет использовать способность "Победный раж", но она восстановит не более чем 5% его здоровья.',
			'После применения способности "Сокрушение" к цели с 20% здоровья или менее воин с вероятностью 50% сможет использовать способность "Победный раж", но она восстановит не более чем 5% его здоровья.'
		],
		x: 3,
		y: 3,
		r: [12,1]
	},
	{
		i: 10488,
		n: 'Громовой раскат',
		m: 2,
		s: [80979,80980],
		d: [
			'Увеличивает урон от способностей "Кровопускание", "Рассекающий удар" и "Удар грома" на 3%. После применения "Удара грома" урон, наносимый способностью "Ударная волна", увеличивается на 5%. Эффект суммируется до 3 раз.',
			'Увеличивает урон от способностей "Кровопускание", "Рассекающий удар" и "Удар грома" на 6%. После применения "Удара грома" урон, наносимый способностью "Ударная волна", увеличивается на 10%. Эффект суммируется до 3 раз.'
		],
		x: 0,
		y: 4
	},
	{
		i: 10492,
		n: 'Бдительность',
		m: 1,
		s: [50720],
		d: [
			'Сосредоточить внимание на выбранном участнике группы или рейда. Каждый раз, когда цель получает удар, время восстановления способности "Провокация" мгновенно завершается, и на вас накладывается эффект "Отмщение", как если бы 20% урона было получено вами. Время действия – 30 мин. Эффект может действовать единовременно только на одну цель.'
		],
		t: ['Радиус действия: 30 м'],
		x: 1,
		y: 4,
		r: [8,1]
	},
	{
		i: 10484,
		n: 'Жесткий отпор',
		m: 2,
		s: [86894,86896],
		d: [
			'Во время действия способности "Блок щитом" ваш "Мощный удар щитом" наносит на 50% больше урона.',
			'Во время действия способности "Блок щитом" ваш "Мощный удар щитом" наносит на 100% больше урона.'
		],
		x: 3,
		y: 4
	},
	{
		i: 10490,
		n: 'Охрана',
		m: 2,
		s: [46945,46949],
		d: [
			'Уменьшает урон, получаемый союзником при применении вами способности "Вмешательство", на 15% на 6 сек.',
			'Уменьшает урон, получаемый союзником при применении вами способности "Вмешательство", на 30% на 6 сек.'
		],
		x: 1,
		y: 5
	},
	{
		i: 10496,
		n: 'Щит и меч',
		m: 3,
		s: [46951,46952,46953],
		d: [
			'Повышает вероятность нанести критический удар способностью "Сокрушение" на 5%. Нанесение урона способностями "Сокрушение" или "Реванш" с вероятностью 10% мгновенно завершит восстановление способности "Мощный удар щитом" и снизит затраты ярости на ее применение на 100% на 5 сек.',
			'Повышает вероятность нанести критический удар способностью "Сокрушение" на 10%. Нанесение урона способностями "Сокрушение" или "Реванш" с вероятностью 20% мгновенно завершит восстановление способности "Мощный удар щитом" и снизит затраты ярости на ее применение на 100% на 5 сек.',
			'Повышает вероятность нанести критический удар способностью "Сокрушение" на 15%. Нанесение урона способностями "Сокрушение" или "Реванш" с вероятностью 30% мгновенно завершит восстановление способности "Мощный удар щитом" и снизит затраты ярости на ее применение на 100% на 5 сек.'
		],
		x: 2,
		y: 5,
		r: [12,1]
	},
	{
		i: 10498,
		n: 'Ударная волна',
		m: 1,
		s: [46968],
		d: [
			'Вызывает перед воином силовую волну, наносящую (75 / 100 * <span class="w"> AP</span>) ед. урона (величина зависит от силы атаки) и оглушающую всех противников на расстоянии 10 м в конической области перед ним на 4 сек.'
		],
		t: ['15 Ярость<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 20 сек.</th></tr></table>'],
		x: 1,
		y: 6
	}
	]
}
]);