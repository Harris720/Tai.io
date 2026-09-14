// ========== 菜品数据 ==========
const DISHES = {
    dimsum: [
        { id: 1, name: 'Har Gau (Prawn Dumpling)', cn: '虾饺', price: 6.60, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: '经典粤式点心，透明外皮包裹新鲜虾肉' },
        { id: 2, name: 'Fun Guo (Steamed Prawn & Meat Parcel)', cn: '鲜虾肉烧卖', price: 6.40, img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400', desc: '蒸制鲜虾猪肉烧卖皇' },
        { id: 3, name: 'Shiu Mai (Prawn & Meat Dumpling)', cn: '烧卖', price: 6.60, img: 'https://images.unsplash.com/photo-1539252554453-80ab65fc3581?w=400', desc: '经典港式烧卖' },
        { id: 4, name: 'Gern Chun Ow Yuk', cn: '牛肉蒸饺', price: 6.40, img: 'https://images.unsplash.com/photo-1625938144753-6a62ad75d6f3?w=400', desc: 'Beef Dumpling with Ginger & Spring Onion' },
        { id: 5, name: 'Spring Onion Pancake', cn: '葱油饼', price: 6.20, img: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400', desc: '香脆葱油饼，外酥内软' },
        { id: 6, name: 'Deep Fried Cuttlefish Cakes', cn: '炸墨鱼饼', price: 6.60, img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400', desc: '香酥墨鱼饼' },
        { id: 7, name: 'Crispy Spring Rolls', cn: '春卷', price: 6.20, img: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400', desc: 'Cantonese Style Crispy Spring Rolls' },
        { id: 8, name: 'Deep Fried Wonton', cn: '炸云吞', price: 6.60, img: 'https://images.unsplash.com/photo-1625938145744-e380515399b7?w=400', desc: 'Sweet & Sour Sauce Crispy Prawn Dumpling' },
        { id: 9, name: 'Che Pow Har', cn: '纸包虾', price: 6.60, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: 'Fried Prawn in Rice Paper' },
    ],
    starter: [
        { id: 14, name: 'Peking Aromatic Crispy Duck', cn: '北京烤鸭', price: 32.00, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: '北京烤鸭配薄饼 Half with Pancakes' },
        { id: 15, name: 'Minced Chicken with Lettuce Wrap', cn: '鸡肉生菜包', price: 9.50, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', desc: '鸡肉松生菜包配腰果' },
        { id: 16, name: 'Spare Ribs with Salt & Chili Pepper', cn: '椒盐排骨', price: 10.80, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', desc: '椒盐排骨，香辣可口' },
        { id: 19, name: 'Chopped Spare Ribs in S&S Sauce', cn: '糖醋排骨', price: 10.80, img: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400', desc: 'Sweet & Sour Spare Ribs' },
        { id: 21, name: 'Prawn Meat on Toast', cn: '虾多士', price: 9.50, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', desc: 'Prawn on Toast with Sesame Seeds' },
        { id: 23, name: 'Deep Fried Squid with S&S Sauce', cn: '糖醋鱿鱼', price: 12.50, img: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400', desc: 'Sweet & Sour Squid' },
    ],
    soup: [
        { id: 33, name: 'Minced Chicken & Sweet Corn Soup', cn: '鸡米玉米汤', price: 5.50, img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400', desc: '鸡肉末玉米浓汤' },
        { id: 34, name: 'Crabmeat & Sweet Corn Soup', cn: '蟹肉玉米汤', price: 5.50, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', desc: '蟹肉玉米汤' },
        { id: 35, name: 'Peking Hot & Sour Soup', cn: '北京酸辣汤', price: 5.50, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', desc: '京式酸辣汤' },
        { id: 36, name: 'Sliced Roast Duck & Vegetable Soup', cn: '烧鸭菜汤', price: 5.50, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', desc: '烧鸭时蔬汤' },
        { id: 37, name: 'Wonton Clear Soup', cn: '云吞清汤', price: 6.50, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', desc: '清汤云吞' },
        { id: 39, name: 'Assorted Seafood with Bamboo Fungus Soup', cn: '海鲜竹笙汤', price: 7.00, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', desc: '什锦海鲜竹笙汤' },
    ],
    chicken: [
        { id: 80, name: 'Deep Fried Chicken Cantonese Style', cn: '广式炸鸡', price: 15.00, img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400', desc: 'Half, on Bone, Dry Dish with no Sauce' },
        { id: 81, name: 'Fried Sliced Chicken with Cashew Nuts', cn: '腰果鸡丁', price: 14.00, img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400', desc: '腰果炒鸡片，香脆可口' },
        { id: 82, name: 'Fried Sliced Chicken in Yellow Bean Paste', cn: '黄豆酱鸡片', price: 14.00, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400', desc: '黄豆酱炒鸡片' },
        { id: 83, name: 'Fried Sliced Chicken in O.K. Sauce', cn: '蚝油鸡片', price: 14.00, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400', desc: '蚝油炒鸡片' },
        { id: 84, name: 'Fried Sliced Chicken in Satay Sauce', cn: '沙爹鸡片', price: 14.00, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400', desc: '沙爹酱炒鸡片' },
        { id: 86, name: 'Fried Chicken with Straw Mushroom', cn: '草菇鸡', price: 14.00, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400', desc: '草菇炒鸡片' },
        { id: 87, name: 'Fried Chicken with Pineapple', cn: '菠萝鸡', price: 14.00, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400', desc: '菠萝炒鸡片' },
        { id: 89, name: 'Fried Sliced Chicken in Oyster Sauce', cn: '蚝油鸡片', price: 14.00, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400', desc: '蚝油炒鸡片' },
        { id: 91, name: 'Sweet & Sour Chicken', cn: '糖醋鸡', price: 14.00, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400', desc: '经典糖醋鸡' },
        { id: 94, name: 'Fried Sliced Chicken Kung Po Style', cn: '宫保鸡丁', price: 14.00, img: 'https://images.unsplash.com/photo-1552611052-33e04de1b100?w=400', desc: '宫保鸡丁，川式风味' },
    ],
    beef: [
        { id: 66, name: 'Fillet Steak with Ginger & Spring Onion', cn: '姜葱牛柳', price: 22.00, img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', desc: 'Hot Platter Fillet Steak' },
        { id: 67, name: 'Fillet Steak Cantonese Style', cn: '中式牛排', price: 22.00, img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', desc: 'Hot Platter Cantonese Style' },
        { id: 68, name: 'Fillet Steak in Black Pepper Sauce', cn: '黑椒牛排', price: 22.00, img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', desc: 'Hot Platter Black Pepper Sauce' },
        { id: 69, name: 'Fried Sliced Beef with Cashew Nuts', cn: '腰果牛肉', price: 14.00, img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400', desc: '腰果炒牛肉' },
        { id: 70, name: 'Fried Sliced Beef with Green Pepper', cn: '青椒牛肉', price: 14.00, img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400', desc: 'Green Pepper in Black Bean Sauce' },
        { id: 71, name: 'Fried Sliced Beef in O.K. Sauce', cn: '蚝油牛肉', price: 14.00, img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400', desc: '蚝油炒牛肉' },
        { id: 73, name: 'Fried Sliced Beef in Satay Sauce', cn: '沙爹牛肉', price: 14.00, img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400', desc: '沙爹牛肉' },
        { id: 79, name: 'Fried Shredded Beef with Chili & Garlic', cn: '干煸牛肉丝', price: 14.00, img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400', desc: 'Chili & Garlic Shredded Beef' },
    ],
    pork: [
        { id: 105, name: 'Pork Chop in Cantonese Style', cn: '中式猪排', price: 14.50, img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400', desc: '广式猪排' },
        { id: 106, name: 'Pork Chop in Peking Sauce', cn: '京酱猪排', price: 14.50, img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400', desc: '北京酱猪排' },
        { id: 107, name: 'Pork Chop with Salt & Chili Pepper', cn: '椒盐猪排', price: 14.50, img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400', desc: '椒盐猪排' },
        { id: 108, name: 'Fried Sliced Pork with Cashew Nuts', cn: '腰果肉丁', price: 14.00, img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400', desc: '腰果炒肉片' },
        { id: 109, name: 'Sweet & Sour Pork', cn: '糖醋里脊', price: 14.00, img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400', desc: '经典糖醋里脊' },
        { id: 117, name: 'Fried Sliced Pork Kung Po Style', cn: '宫保肉丁', price: 14.00, img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400', desc: '宫保肉丁' },
    ],
    duck: [
        { id: 95, name: 'Fried Sliced Duck with Pineapple', cn: '菠萝鸭片', price: 14.00, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: 'Pineapple Sliced Duck' },
        { id: 96, name: 'Fried Sliced Duck with Pineapple & Sweet Ginger', cn: '菠萝姜鸭', price: 14.00, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: 'Pineapple & Sweet Ginger Duck' },
        { id: 97, name: 'Fried Sliced Duck with Onion & Black Bean', cn: '豆豉鸭片', price: 14.00, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: 'Onions and Black Bean Sauce Duck' },
        { id: 99, name: 'Fried Sliced Duck in Oyster Sauce', cn: '蚝油鸭片', price: 14.00, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: '蚝油鸭片' },
        { id: 100, name: 'Fried Sliced Duck & Char Sui', cn: '叉烧鸭片', price: 14.00, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: 'Green Peppers in Black Bean Sauce' },
        { id: 101, name: 'Fried Sliced Duck in Orange Sauce', cn: '陈皮鸭', price: 14.50, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: 'Orange Sauce Duck' },
        { id: 104, name: 'Deep Fried Duck Stuffed with Prawn Meat', cn: '八宝鸭', price: 16.00, img: 'https://images.unsplash.com/photo-1625937329935-287441889ab3?w=400', desc: 'Prawn Meat in Mushroom Sauce' },
    ],
    lamb: [
        { id: 118, name: 'Fried Sliced Lamb Kung Po Style', cn: '宫保羊肉', price: 14.50, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', desc: '宫保羊肉片' },
        { id: 119, name: 'Fried Sliced Lamb Peking Style', cn: '京式羊肉', price: 14.50, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', desc: 'Spring Onions Peking Style' },
        { id: 120, name: 'Fried Sliced Lamb in Spicy Garlic Sauce', cn: '蒜香羊肉', price: 14.50, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', desc: 'Spicy Garlic Sauce Lamb' },
        { id: 121, name: 'Fried Sliced Lamb in Satay Sauce', cn: '沙爹羊肉', price: 14.50, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', desc: 'Satay Sauce Lamb' },
    ],
    prawn: [
        { id: 54, name: 'Pan Fried King Prawns with Salt & Pepper', cn: '椒盐大虾', price: 16.00, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', desc: '椒盐大王虾' },
        { id: 55, name: 'Pan Fried King Prawns with Garlic & Coriander', cn: '蒜香大虾', price: 16.00, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', desc: 'Garlic and Coriander King Prawns' },
        { id: 56, name: 'Panned King Prawns Cantonese Style', cn: '广式大虾', price: 16.00, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', desc: 'Cantonese Style King Prawns' },
        { id: 57, name: 'Fried King Prawns with Cashew Nuts', cn: '腰果大虾', price: 16.00, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', desc: 'Cashew Nuts King Prawns' },
        { id: 60, name: 'Sweet & Sour King Prawns', cn: '糖醋大虾', price: 16.00, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', desc: '经典糖醋大虾' },
        { id: 63, name: 'Fried King Prawn in Szachuan Sauce', cn: '川味大虾', price: 16.00, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', desc: '四川风味大虾' },
    ],
    seafood: [
        { id: 41, name: 'Baked Lobster with Ginger & Spring Onion', cn: '姜葱龙虾', price: 48.00, img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400', desc: 'Baked Lobster with Ginger & Spring Onion' },
        { id: 42, name: 'Baked Lobster in Black Bean Sauce', cn: '豆豉龙虾', price: 48.00, img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400', desc: 'Baked Lobster in Black Bean Sauce' },
        { id: 44, name: 'Fried Scallops with Seasonal Vegetables', cn: '时蔬炒带子', price: 19.00, img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400', desc: 'Fried Scallops with Vegetables' },
        { id: 45, name: 'Sauté Fresh Scallops', cn: '鲜炒带子', price: 19.00, img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400', desc: 'Sauté Fresh Scallops' },
        { id: 46, name: 'Sauté Assorted Seafood', cn: '海鲜炒什锦', price: 19.00, img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400', desc: 'Assorted Seafood Sauté' },
        { id: 48, name: 'Fried Squid with Green Pepper & Black Bean', cn: '豆豉鱿鱼', price: 14.00, img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400', desc: 'Green Pepper & Black Bean Sauce Squid' },
    ],
    vegetarian: [
        { id: 154, name: 'Fried Mixed Vegetables with Cashew Nuts', cn: '腰果时蔬', price: 10.50, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', desc: 'Cashew Nuts Mixed Vegetables' },
        { id: 155, name: 'Stir Fried Mixed Vegetables in Satay Sauce', cn: '沙爹时蔬', price: 10.50, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', desc: 'Satay Sauce Mixed Vegetables' },
        { id: 158, name: 'Fried Broccoli in Garlic Sauce', cn: '蒜蓉西兰花', price: 10.50, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', desc: 'Garlic Sauce Broccoli' },
        { id: 159, name: 'Fried Mongetaus in Garlic Sauce', cn: '蒜蓉荷兰豆', price: 10.50, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', desc: 'Garlic Sauce Snow Peas' },
        { id: 160, name: 'Sweet Corn & Preserved Cabbage Fried Rice', cn: '咸菜玉米炒饭', price: 10.50, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', desc: 'Sweet Corn & Preserved Cabbage Fried Rice' },
        { id: 162, name: 'Mixed Vegetables Chowmein', cn: '素菜炒面', price: 11.00, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', desc: 'Mixed Vegetables Chowmein' },
        { id: 172, name: 'Chicken Fried Rice', cn: '鸡炒饭', price: 13.50, img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400', desc: 'Chicken Fried Rice' },
    ]
};

// ========== 足球新闻数据 ==========
const NEWS_TEMPLATES = {
    liverpool: [
        { title: '利物浦主场 3-1 力克切尔西，萨拉赫梅开二度', desc: '在安菲尔德球场，利物浦以3-1击败切尔西，萨拉赫表现出色打入两球，范戴克贡献头球破门。', img: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400' },
        { title: '斯洛特赛后：我们走在正确的道路上', desc: '利物浦主帅斯洛特对球队近期表现表示满意，并强调球队仍在进步中，红军球迷应该对未来保持信心。', img: 'https://images.unsplash.com/photo-1577477387937-0c8e8a8b8e8e?w=400' },
        { title: '利物浦官宣续约青训小将，年仅18岁天赋惊人', desc: '利物浦俱乐部官方宣布与青训营小将签订为期五年的新合同，这位18岁的新星被视为未来中场核心。', img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400' },
        { title: '红军下轮迎战埃弗顿，默西塞德德比一触即发', desc: '本周末英超焦点战，利物浦将在安菲尔德迎战埃弗顿。这是本赛季第二场默西塞德德比，双方球迷期待已久。', img: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400' },
        { title: '利物浦新援融入迅速，训练中表现亮眼', desc: '今年夏窗加盟的新援在训练中展现出良好的适应能力，主帅斯洛特对其融入速度表示赞赏。', img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400' },
    ],
    everton: [
        { title: '埃弗顿客场 2-0 战胜狼队，勒温再献进球', desc: '英超第15轮焦点战，埃弗顿客场2-0击败狼队，勒温延续火热状态打入一球。', img: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=400' },
        { title: '埃弗顿主帅：我们尊重每一个对手', desc: '埃弗顿主帅在赛前发布会上表示，球队会尊重每一个对手，不会因为排名领先而轻视任何比赛。', img: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400' },
        { title: '埃弗顿青训学院再结硕果，16岁天才破门', desc: '埃弗顿青训学院16岁新星在青年队比赛中上演帽子戏法，被认为是未来之星。', img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400' },
        { title: '太妃糖主场迎战阿森纳，古迪逊公园备受关注', desc: '本周末英超迎来焦点战，埃弗顿将在古迪逊公园球场迎战阿森纳，双方球迷拭目以待。', img: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400' },
        { title: '埃弗顿中场核心伤愈复出，球队如虎添翼', desc: '埃弗顿中场核心在伤病数周后伤愈复出，主帅确认他将在周末联赛中登场。', img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400' },
    ]
};

// ========== 状态管理 ==========
let cart = {};
let currentCategory = 'dimsum';
let currentTeam = 'all';
let selectedTable = 'medium';

const TABLE_NAMES = {
    small: '小桌 / Small Table (2 people)',
    medium: '中桌 / Medium Table (4 people)',
    large: '大桌 / Large Table (6-8 people)'
};

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initTabs();
    initDishList();
    initReservation();
    initNews();
    initNav();
    initDateMin();
    updateLastUpdate();
});

// ========== 导航栏 ==========
function initNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 点击导航项关闭菜单
    navMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========== 菜单 ==========
function initMenu() {
    renderDishes(currentCategory);

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderDishes(currentCategory);
        });
    });
}

function renderDishes(category) {
    const grid = document.getElementById('menuGrid');
    const dishes = DISHES[category] || [];
    grid.innerHTML = dishes.map(dish => `
        <div class="dish-card" data-id="${dish.id}">
            <img src="${dish.img}" alt="${dish.name}" class="dish-img" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/400x300/C8102E/FFFFFF?text=🥢+Tai+Pan'">
            <div class="dish-info">
                <h4 class="dish-name">${dish.name}</h4>
                <p class="dish-name-cn">${dish.cn} · #${dish.id}</p>
                <p class="dish-desc">${dish.desc}</p>
                <div class="dish-footer">
                    <span class="dish-price">£${dish.price.toFixed(2)}</span>
                    <button class="add-cart-btn" onclick="addToCart(${dish.id}, '${category}')" title="加入订单">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========== 菜品列表（预订单） ==========
function initDishList() {
    renderDishList('');
    document.getElementById('dishSearch')?.addEventListener('input', (e) => {
        renderDishList(e.target.value);
    });
}

function renderDishList(keyword) {
    const list = document.getElementById('dishList');
    let allDishes = [];
    Object.entries(DISHES).forEach(([category, dishes]) => {
        dishes.forEach(d => allDishes.push({...d, category}));
    });

    const filtered = allDishes.filter(d =>
        d.name.toLowerCase().includes(keyword.toLowerCase()) ||
        d.cn.includes(keyword)
    ).slice(0, 50);

    if (filtered.length === 0) {
        list.innerHTML = '<p style="text-align:center;padding:20px;color:#999;">没有找到匹配的菜品 No dishes found</p>';
        return;
    }

    list.innerHTML = filtered.map(dish => `
        <div class="dish-item">
            <img src="${dish.img}" alt="${dish.name}"
                 onerror="this.src='https://via.placeholder.com/100x100/C8102E/FFFFFF?text=🥢'">
            <div class="dish-item-info">
                <div class="dish-item-name">${dish.name}</div>
                <div class="dish-item-price">£${dish.price.toFixed(2)}</div>
            </div>
            <div class="qty-control">
                <button class="qty-btn" onclick="updateQty(${dish.id}, -1)">−</button>
                <span class="qty-display">${cart[dish.id]?.qty || 0}</span>
                <button class="qty-btn" onclick="updateQty(${dish.id}, 1)">+</button>
            </div>
        </div>
    `).join('');
}

// ========== 购物车 ==========
function addToCart(id, category) {
    const dish = DISHES[category].find(d => d.id === id);
    if (!dish) return;

    if (!cart[id]) {
        cart[id] = { ...dish, qty: 1 };
    } else {
        cart[id].qty += 1;
    }
    showToast(`已添加 ${dish.name} ✓ Added to cart`, 'success');
    updateCart();
    renderDishList(document.getElementById('dishSearch')?.value || '');
}

function updateQty(id, delta) {
    if (!cart[id] && delta > 0) {
        // 需要从所有类别中找到菜品
        let dish = null;
        for (const cat of Object.keys(DISHES)) {
            dish = DISHES[cat].find(d => d.id === id);
            if (dish) break;
        }
        if (dish) {
            cart[id] = { ...dish, qty: 1 };
        }
    } else if (cart[id]) {
        cart[id].qty += delta;
        if (cart[id].qty <= 0) {
            delete cart[id];
        }
    }
    updateCart();
    renderDishList(document.getElementById('dishSearch')?.value || '');
}

function removeFromCart(id) {
    delete cart[id];
    updateCart();
    renderDishList(document.getElementById('dishSearch')?.value || '');
}

function updateCart() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');

    const items = Object.values(cart);
    if (items.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart">购物车空空如也 Your cart is empty</p>';
        cartTotalEl.textContent = '£0.00';
        return;
    }

    cartItemsEl.innerHTML = items.map(item => `
        <div class="cart-item">
            <img src="${item.img}" class="cart-item-img" alt="${item.name}"
                 onerror="this.src='https://via.placeholder.com/50x50/C8102E/FFFFFF?text=🥢'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-detail">£${item.price.toFixed(2)} × ${item.qty} = £${(item.price * item.qty).toFixed(2)}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="移除">×</button>
        </div>
    `).join('');

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    cartTotalEl.textContent = `£${total.toFixed(2)}`;
}

document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    const items = Object.values(cart);
    if (items.length === 0) {
        showToast('购物车为空，请先选择菜品 Cart is empty', 'error');
        return;
    }
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const itemList = items.map(i => `<li>${i.name} × ${i.qty} = £${(i.price * i.qty).toFixed(2)}</li>`).join('');

    document.getElementById('modalBody').innerHTML = `
        <h3>🎉 订单确认 Order Confirmed</h3>
        <div class="confirm-detail">
            <strong>订单号 Order #:</strong> TP${Date.now().toString().slice(-8)}
        </div>
        <div class="confirm-detail">
            <strong>菜品 Items:</strong>
            <ul style="margin-top:8px;padding-left:20px;">${itemList}</ul>
        </div>
        <div class="confirm-detail">
            <strong>总计 Total:</strong> £${total.toFixed(2)}
        </div>
        <div class="confirm-detail">
            <strong>预计时间 Ready in:</strong> 25-35 分钟 minutes
        </div>
        <p style="text-align:center;margin-top:20px;color:#C8102E;">
            感谢您的预定！到店出示订单号即可<br>
            Thank you! Show order number at restaurant
        </p>
        <button class="btn btn-primary btn-block" onclick="closeModal(); cart={}; updateCart(); renderDishList('');">完成 Done</button>
    `;
    document.getElementById('modal').classList.add('active');
});

// ========== 预定座位 ==========
function initReservation() {
    document.querySelectorAll('.table-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.table-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedTable = card.dataset.table;
            document.getElementById('selectedTableText').textContent = TABLE_NAMES[selectedTable];
        });
    });

    document.getElementById('reservationForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        document.getElementById('modalBody').innerHTML = `
            <h3>🎊 预定成功 Reservation Confirmed</h3>
            <div class="confirm-detail"><strong>姓名 Name:</strong> ${data.name}</div>
            <div class="confirm-detail"><strong>电话 Phone:</strong> ${data.phone}</div>
            <div class="confirm-detail"><strong>邮箱 Email:</strong> ${data.email || '未提供 Not provided'}</div>
            <div class="confirm-detail"><strong>桌型 Table:</strong> ${TABLE_NAMES[selectedTable]}</div>
            <div class="confirm-detail"><strong>人数 Party Size:</strong> ${data.party_size} 人 people</div>
            <div class="confirm-detail"><strong>日期 Date:</strong> ${data.date}</div>
            <div class="confirm-detail"><strong>时间 Time:</strong> ${data.time}</div>
            ${data.requests ? `<div class="confirm-detail"><strong>特殊要求 Special Requests:</strong> ${data.requests}</div>` : ''}
            <div class="confirm-detail">
                <strong>确认号 Confirmation #:</strong> TP${Date.now().toString().slice(-8)}
            </div>
            <p style="text-align:center;margin-top:20px;color:#C8102E;">
                我们将在24小时内与您联系确认<br>
                We will contact you within 24 hours
            </p>
            <button class="btn btn-primary btn-block" onclick="closeModal(); document.getElementById('reservationForm').reset();">完成 Done</button>
        `;
        document.getElementById('modal').classList.add('active');
        showToast('预定成功！Reservation confirmed!', 'success');
    });
}

function initDateMin() {
    const dateInput = document.querySelector('input[type="date"][name="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
}

// ========== 新闻 ==========
function initNews() {
    renderNews(currentTeam);

    document.querySelectorAll('.team-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.team-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTeam = tab.dataset.team;
            renderNews(currentTeam);
        });
    });

    document.getElementById('refreshNews')?.addEventListener('click', () => {
        renderNews(currentTeam);
        updateLastUpdate();
        showToast('新闻已刷新 News refreshed 🔄', 'success');
    });

    // 每30秒自动刷新新闻
    setInterval(() => {
        renderNews(currentTeam);
        updateLastUpdate();
    }, 30000);

    // 启动 ticker
    startTicker();
}

function renderNews(team) {
    const grid = document.getElementById('newsGrid');
    let newsItems = [];

    if (team === 'all') {
        newsItems = [...NEWS_TEMPLATES.liverpool.map(n => ({...n, team: 'liverpool'})), ...NEWS_TEMPLATES.everton.map(n => ({...n, team: 'everton'}))];
    } else {
        newsItems = NEWS_TEMPLATES[team].map(n => ({...n, team}));
    }

    // 随机打乱，模拟动态新闻
    newsItems = newsItems.sort(() => Math.random() - 0.5).slice(0, 6);

    const now = new Date();
    grid.innerHTML = newsItems.map((news, idx) => {
        const minutesAgo = Math.floor(Math.random() * 60) + idx * 10;
        const time = new Date(now - minutesAgo * 60000);
        const teamName = news.team === 'liverpool' ? '利物浦 Liverpool' : '埃弗顿 Everton';
        return `
            <div class="news-card">
                <img src="${news.img}" alt="${news.title}" class="news-card-img" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/400x200/${news.team === 'liverpool' ? 'C8102E' : '003399'}/FFFFFF?text=${news.team === 'liverpool' ? 'Liverpool' : 'Everton'}'">
                <div class="news-card-body">
                    <div class="news-card-meta">
                        <span class="team-tag ${news.team}">${teamName}</span>
                        <span class="news-time">${minutesAgo} 分钟前 ${minutesAgo}min ago</span>
                    </div>
                    <h4 class="news-card-title">${news.title}</h4>
                    <p class="news-card-desc">${news.desc}</p>
                </div>
            </div>
        `;
    }).join('');
}

function startTicker() {
    const tickerEl = document.getElementById('tickerText');
    if (!tickerEl) return;

    setInterval(() => {
        const allNews = [...NEWS_TEMPLATES.liverpool, ...NEWS_TEMPLATES.everton];
        const random = allNews[Math.floor(Math.random() * allNews.length)];
        tickerEl.textContent = `${random.team === 'liverpool' ? '🔴 利物浦' : '🔵 埃弗顿'} | ${random.title}`;
    }, 5000);
}

function updateLastUpdate() {
    const el = document.getElementById('lastUpdate');
    if (el) {
        el.textContent = new Date().toLocaleString('en-GB');
    }
}

// ========== Modal & Toast ==========
function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

document.getElementById('modalClose')?.addEventListener('click', closeModal);

document.getElementById('modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
});

function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========== 滚动效果 ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(139, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(200, 16, 46, 0.95)';
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.2)';
    }
});