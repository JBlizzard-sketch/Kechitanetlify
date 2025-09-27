-- Robust seed for demo: insert users and loans within a transaction
BEGIN;
CREATE TEMP TABLE tmp_users(id uuid, phone text, name text);
INSERT INTO users (phone, name) VALUES ('+2547f2f68ab1', 'Demo User 1') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f3b93d24', 'Demo User 2') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547cb5c4af8', 'Demo User 3') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25477f74f98e', 'Demo User 4') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254743d7864f', 'Demo User 5') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254790a25b50', 'Demo User 6') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547d16829ab', 'Demo User 7') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547164d7fa0', 'Demo User 8') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547bf0d4e41', 'Demo User 9') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547dfa78500', 'Demo User 10') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a360be1f', 'Demo User 11') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f3750ede', 'Demo User 12') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254786ac0f9d', 'Demo User 13') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547dae0aa80', 'Demo User 14') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547c43b84a2', 'Demo User 15') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254746737063', 'Demo User 16') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547e3425d5b', 'Demo User 17') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254708a4c915', 'Demo User 18') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547dac4b528', 'Demo User 19') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25471998eac6', 'Demo User 20') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547773d0a4b', 'Demo User 21') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254747d57864', 'Demo User 22') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547dc2ae3d3', 'Demo User 23') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547acd521b0', 'Demo User 24') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f0004f46', 'Demo User 25') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f1db8f77', 'Demo User 26') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25479fcdcaa1', 'Demo User 27') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25472f5d94d3', 'Demo User 28') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547ad337a11', 'Demo User 29') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25473804ca2a', 'Demo User 30') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25477ba934cc', 'Demo User 31') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547568ad80c', 'Demo User 32') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25472469b0fa', 'Demo User 33') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547d1362469', 'Demo User 34') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b28bbc0d', 'Demo User 35') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547d91a5180', 'Demo User 36') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254705805095', 'Demo User 37') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25477bd2cccb', 'Demo User 38') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254739722c65', 'Demo User 39') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254783f70c7a', 'Demo User 40') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25471281b224', 'Demo User 41') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25475d99fd57', 'Demo User 42') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547e91ac615', 'Demo User 43') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25478a55ca75', 'Demo User 44') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f3cbe90b', 'Demo User 45') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547371584c5', 'Demo User 46') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254724d76da8', 'Demo User 47') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a1c3ab7e', 'Demo User 48') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254765346a8a', 'Demo User 49') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25478e53cfcb', 'Demo User 50') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a17dcb51', 'Demo User 51') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f30ec509', 'Demo User 52') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f08b222f', 'Demo User 53') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547059923ce', 'Demo User 54') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254752ac0f52', 'Demo User 55') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f7c2a47b', 'Demo User 56') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a48b1f94', 'Demo User 57') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547dd0f1754', 'Demo User 58') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547bc68645b', 'Demo User 59') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547cf0179ea', 'Demo User 60') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254799b37013', 'Demo User 61') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25479c665c7e', 'Demo User 62') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25477824ede9', 'Demo User 63') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25479635f2da', 'Demo User 64') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547de238253', 'Demo User 65') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25474871c583', 'Demo User 66') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b1eb5060', 'Demo User 67') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547666f22aa', 'Demo User 68') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547715cb093', 'Demo User 69') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b538be80', 'Demo User 70') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f2e80eaa', 'Demo User 71') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254767cad8fd', 'Demo User 72') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547497fcb9a', 'Demo User 73') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a25604d0', 'Demo User 74') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547e1f850cb', 'Demo User 75') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547bc661ad7', 'Demo User 76') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547255ab665', 'Demo User 77') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254726b4719a', 'Demo User 78') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547e25489b9', 'Demo User 79') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a5ef39ae', 'Demo User 80') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254702ffc325', 'Demo User 81') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a0c0ba1c', 'Demo User 82') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f3a5a8ca', 'Demo User 83') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25475a61d1e5', 'Demo User 84') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254786eb9515', 'Demo User 85') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547ceafbe03', 'Demo User 86') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25472ead3e61', 'Demo User 87') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547d6084ee7', 'Demo User 88') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25478331a5b6', 'Demo User 89') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25473df1f7bb', 'Demo User 90') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547cc7e89d6', 'Demo User 91') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25477d0a4054', 'Demo User 92') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547dd6b9536', 'Demo User 93') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254716cf882e', 'Demo User 94') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547af272f55', 'Demo User 95') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547ea4bd424', 'Demo User 96') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25477540d7ee', 'Demo User 97') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25474890c19b', 'Demo User 98') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254708148d7f', 'Demo User 99') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254752c9d989', 'Demo User 100') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547c0172a5e', 'Demo User 101') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547885a4abd', 'Demo User 102') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547c5ca9678', 'Demo User 103') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25477762bc03', 'Demo User 104') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547e3b36a6e', 'Demo User 105') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547eb5e8e8a', 'Demo User 106') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547862a040c', 'Demo User 107') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a4fc33c0', 'Demo User 108') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b91ea6cc', 'Demo User 109') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25473b107ec2', 'Demo User 110') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547820ad802', 'Demo User 111') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b4766142', 'Demo User 112') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547ec85879a', 'Demo User 113') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254722762da5', 'Demo User 114') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254753559cf5', 'Demo User 115') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254734915819', 'Demo User 116') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a1688c53', 'Demo User 117') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254763fa97e2', 'Demo User 118') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f48fb0f9', 'Demo User 119') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25479bf22c47', 'Demo User 120') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b3c6101c', 'Demo User 121') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25477aa397b6', 'Demo User 122') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a16b7253', 'Demo User 123') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254704d56e92', 'Demo User 124') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547ca47dd8a', 'Demo User 125') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547da218ed2', 'Demo User 126') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547651cba4c', 'Demo User 127') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b0fe7ebd', 'Demo User 128') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25474d2ce532', 'Demo User 129') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547072f0c4b', 'Demo User 130') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547ff6e1213', 'Demo User 131') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547d9a89afd', 'Demo User 132') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547ea67d19b', 'Demo User 133') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547baf26cf3', 'Demo User 134') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25471d044ab2', 'Demo User 135') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25476bcfb0c8', 'Demo User 136') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547e3985180', 'Demo User 137') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25473ea5381c', 'Demo User 138') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254720ea549d', 'Demo User 139') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25475514cab7', 'Demo User 140') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25472b6408e3', 'Demo User 141') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254723438fde', 'Demo User 142') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254720da5d35', 'Demo User 143') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547905574dc', 'Demo User 144') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a237ea1c', 'Demo User 145') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254796f46ea2', 'Demo User 146') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25478de9ac42', 'Demo User 147') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254791debb81', 'Demo User 148') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25478710136f', 'Demo User 149') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254709c6e2a6', 'Demo User 150') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25470159caaf', 'Demo User 151') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547884ff8ba', 'Demo User 152') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547957762fc', 'Demo User 153') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547690d7e24', 'Demo User 154') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25471c784d70', 'Demo User 155') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25476f54797b', 'Demo User 156') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547cedd3104', 'Demo User 157') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25476a2da235', 'Demo User 158') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25476e0489f5', 'Demo User 159') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547cce61b7a', 'Demo User 160') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25474c1b0873', 'Demo User 161') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547bf225b29', 'Demo User 162') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254741a20917', 'Demo User 163') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25475de2a7c1', 'Demo User 164') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254730d9b739', 'Demo User 165') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a7286142', 'Demo User 166') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a37aca9f', 'Demo User 167') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a97b0dc9', 'Demo User 168') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547802af923', 'Demo User 169') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25476288344a', 'Demo User 170') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547420827a6', 'Demo User 171') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547479a6aec', 'Demo User 172') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547bdf5902f', 'Demo User 173') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25473209536b', 'Demo User 174') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254754d03667', 'Demo User 175') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254779436977', 'Demo User 176') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b5fb0973', 'Demo User 177') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254779d6d3dc', 'Demo User 178') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b7d4cc50', 'Demo User 179') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a656cd79', 'Demo User 180') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254792f3bf5b', 'Demo User 181') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a0087924', 'Demo User 182') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254732f44f62', 'Demo User 183') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25473a89f71d', 'Demo User 184') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547cc24e3ff', 'Demo User 185') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547fc38fbaa', 'Demo User 186') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254761551905', 'Demo User 187') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+254768a46e7e', 'Demo User 188') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25470758bac4', 'Demo User 189') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25476c246b08', 'Demo User 190') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25472eb3121c', 'Demo User 191') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547dc84520b', 'Demo User 192') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547c2304bf7', 'Demo User 193') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+25476860e1cf', 'Demo User 194') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547b162d256', 'Demo User 195') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547fc5aa639', 'Demo User 196') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547a84b84e7', 'Demo User 197') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547fc7d5812', 'Demo User 198') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547fd882117', 'Demo User 199') RETURNING id INTO STRICT NULL; -- inserted
INSERT INTO users (phone, name) VALUES ('+2547f30fac9b', 'Demo User 200') RETURNING id INTO STRICT NULL; -- inserted

-- Insert many users
INSERT INTO users (phone, name) VALUES ('+254710000001', 'Demo User 1') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000002', 'Demo User 2') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000003', 'Demo User 3') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000004', 'Demo User 4') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000005', 'Demo User 5') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000006', 'Demo User 6') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000007', 'Demo User 7') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000008', 'Demo User 8') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000009', 'Demo User 9') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000010', 'Demo User 10') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000011', 'Demo User 11') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000012', 'Demo User 12') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000013', 'Demo User 13') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000014', 'Demo User 14') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000015', 'Demo User 15') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000016', 'Demo User 16') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000017', 'Demo User 17') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000018', 'Demo User 18') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000019', 'Demo User 19') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000020', 'Demo User 20') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000021', 'Demo User 21') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000022', 'Demo User 22') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000023', 'Demo User 23') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000024', 'Demo User 24') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000025', 'Demo User 25') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000026', 'Demo User 26') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000027', 'Demo User 27') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000028', 'Demo User 28') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000029', 'Demo User 29') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000030', 'Demo User 30') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000031', 'Demo User 31') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000032', 'Demo User 32') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000033', 'Demo User 33') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000034', 'Demo User 34') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000035', 'Demo User 35') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000036', 'Demo User 36') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000037', 'Demo User 37') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000038', 'Demo User 38') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000039', 'Demo User 39') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000040', 'Demo User 40') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000041', 'Demo User 41') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000042', 'Demo User 42') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000043', 'Demo User 43') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000044', 'Demo User 44') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000045', 'Demo User 45') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000046', 'Demo User 46') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000047', 'Demo User 47') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000048', 'Demo User 48') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000049', 'Demo User 49') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000050', 'Demo User 50') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000051', 'Demo User 51') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000052', 'Demo User 52') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000053', 'Demo User 53') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000054', 'Demo User 54') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000055', 'Demo User 55') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000056', 'Demo User 56') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000057', 'Demo User 57') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000058', 'Demo User 58') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000059', 'Demo User 59') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000060', 'Demo User 60') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000061', 'Demo User 61') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000062', 'Demo User 62') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000063', 'Demo User 63') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000064', 'Demo User 64') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000065', 'Demo User 65') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000066', 'Demo User 66') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000067', 'Demo User 67') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000068', 'Demo User 68') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000069', 'Demo User 69') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000070', 'Demo User 70') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000071', 'Demo User 71') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000072', 'Demo User 72') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000073', 'Demo User 73') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000074', 'Demo User 74') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000075', 'Demo User 75') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000076', 'Demo User 76') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000077', 'Demo User 77') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000078', 'Demo User 78') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000079', 'Demo User 79') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000080', 'Demo User 80') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000081', 'Demo User 81') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000082', 'Demo User 82') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000083', 'Demo User 83') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000084', 'Demo User 84') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000085', 'Demo User 85') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000086', 'Demo User 86') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000087', 'Demo User 87') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000088', 'Demo User 88') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000089', 'Demo User 89') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000090', 'Demo User 90') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000091', 'Demo User 91') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000092', 'Demo User 92') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000093', 'Demo User 93') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000094', 'Demo User 94') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000095', 'Demo User 95') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000096', 'Demo User 96') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000097', 'Demo User 97') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000098', 'Demo User 98') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000099', 'Demo User 99') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000100', 'Demo User 100') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000101', 'Demo User 101') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000102', 'Demo User 102') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000103', 'Demo User 103') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000104', 'Demo User 104') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000105', 'Demo User 105') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000106', 'Demo User 106') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000107', 'Demo User 107') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000108', 'Demo User 108') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000109', 'Demo User 109') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000110', 'Demo User 110') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000111', 'Demo User 111') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000112', 'Demo User 112') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000113', 'Demo User 113') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000114', 'Demo User 114') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000115', 'Demo User 115') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000116', 'Demo User 116') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000117', 'Demo User 117') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000118', 'Demo User 118') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000119', 'Demo User 119') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000120', 'Demo User 120') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000121', 'Demo User 121') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000122', 'Demo User 122') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000123', 'Demo User 123') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000124', 'Demo User 124') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000125', 'Demo User 125') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000126', 'Demo User 126') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000127', 'Demo User 127') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000128', 'Demo User 128') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000129', 'Demo User 129') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000130', 'Demo User 130') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000131', 'Demo User 131') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000132', 'Demo User 132') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000133', 'Demo User 133') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000134', 'Demo User 134') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000135', 'Demo User 135') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000136', 'Demo User 136') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000137', 'Demo User 137') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000138', 'Demo User 138') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000139', 'Demo User 139') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000140', 'Demo User 140') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000141', 'Demo User 141') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000142', 'Demo User 142') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000143', 'Demo User 143') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000144', 'Demo User 144') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000145', 'Demo User 145') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000146', 'Demo User 146') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000147', 'Demo User 147') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000148', 'Demo User 148') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000149', 'Demo User 149') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000150', 'Demo User 150') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000151', 'Demo User 151') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000152', 'Demo User 152') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000153', 'Demo User 153') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000154', 'Demo User 154') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000155', 'Demo User 155') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000156', 'Demo User 156') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000157', 'Demo User 157') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000158', 'Demo User 158') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000159', 'Demo User 159') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000160', 'Demo User 160') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000161', 'Demo User 161') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000162', 'Demo User 162') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000163', 'Demo User 163') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000164', 'Demo User 164') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000165', 'Demo User 165') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000166', 'Demo User 166') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000167', 'Demo User 167') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000168', 'Demo User 168') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000169', 'Demo User 169') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000170', 'Demo User 170') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000171', 'Demo User 171') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000172', 'Demo User 172') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000173', 'Demo User 173') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000174', 'Demo User 174') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000175', 'Demo User 175') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000176', 'Demo User 176') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000177', 'Demo User 177') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000178', 'Demo User 178') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000179', 'Demo User 179') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000180', 'Demo User 180') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000181', 'Demo User 181') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000182', 'Demo User 182') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000183', 'Demo User 183') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000184', 'Demo User 184') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000185', 'Demo User 185') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000186', 'Demo User 186') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000187', 'Demo User 187') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000188', 'Demo User 188') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000189', 'Demo User 189') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000190', 'Demo User 190') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000191', 'Demo User 191') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000192', 'Demo User 192') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000193', 'Demo User 193') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000194', 'Demo User 194') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000195', 'Demo User 195') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000196', 'Demo User 196') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000197', 'Demo User 197') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000198', 'Demo User 198') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000199', 'Demo User 199') ON CONFLICT (phone) DO NOTHING;
INSERT INTO users (phone, name) VALUES ('+254710000200', 'Demo User 200') ON CONFLICT (phone) DO NOTHING;

-- Insert loans referencing random user ids
DO $$
BEGIN
  FOR i IN 1..400 LOOP
    INSERT INTO loans (user_id, amount, interest_rate, term_months, monthly_payment, status)
    VALUES ((SELECT id FROM users OFFSET floor(random()*200) LIMIT 1), (1000 + floor(random()*199000))::bigint, 18.0, 12, (1000 + floor(random()*199000))::bigint / 12, 'approved');
  END LOOP;
END$$;

COMMIT;
