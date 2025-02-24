var storyContent = {"inkVersion":21,"root":[["^Welcome to Paths of Courage: A World War II Adventure. In this story, you step into the shoes of a young person living through one of history’s most transformative conflicts. World War II began in 1939 when Germany invaded Poland, setting off a chain reaction that would engulf nations across the globe. Throughout this adventure, you will encounter real historical events, learn about military strategies, and witness the courage of both soldiers and civilians.","\n","^What path will you choose?","\n","ev","str","^Join the Military and fight on the front lines","/str","/ev",{"*":"0.c-0","flg":20},"ev","str","^Stay home as a Civilian and support the war effort from the home front","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":["^ ",{"->":"join_army"},"\n",{"->":"0.g-0"},{"#f":5}],"c-1":["^ ",{"->":"stay_civilian"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"join_army":[["^You decide that duty calls and enlist in the armed forces. At a bustling military base, you begin rigorous training—learning not only combat skills but also the discipline, camaraderie, and strategic thinking needed in battle. In 1939, as tensions rise in Europe, your journey into the heart of war begins.","\n","^Historical Fact: The war officially broke out on September 1, 1939, when Nazi Germany invaded Poland, prompting Britain and France to declare war.","\n","^Now, choose your branch:","\n","ev","str","^Focus on infantry training","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Volunteer for the air force","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"join_infantry"},"\n",{"#f":5}],"c-1":["^ ",{"->":"join_airforce"},"\n",{"#f":5}]}],{"#f":1}],"join_infantry":[["^In infantry training, you master foot drills, marksmanship, and close-quarters combat. You study military tactics, including the famed German *blitzkrieg*—a strategy of rapid, coordinated attacks by tanks, infantry, and air support.","\n","^Historical Fact: Blitzkrieg, or “lightning war,” allowed Germany to quickly conquer much of Europe in the early years of the conflict.","\n","^After rigorous training, you’re deployed to a European front. The harsh realities of battle and the brotherhood of your fellow soldiers become your new world.","\n","^What is your next assignment?","\n","ev","str","^Join the North African Campaign to fight in the desert","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Head to the Eastern Front to face the brutal Russian winter","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"north_africa"},"\n",{"#f":5}],"c-1":["^ ",{"->":"eastern_front"},"\n",{"#f":5}]}],{"#f":1}],"join_airforce":[["^Volunteering for the air force, you undergo intense flight training. You learn about aerial combat, navigation, and the mechanics of early fighter planes. Soon, you are part of a squadron tasked with protecting your nation’s skies.","\n","^Historical Fact: The Battle of Britain (July–October 1940) saw the Royal Air Force repel relentless attacks by the German Luftwaffe, marking a crucial turning point in the war.","\n","^Your missions take you high above enemy territory, where every dogfight is a battle for survival.","\n","^Choose your aerial challenge:","\n","ev","str","^Participate in the Battle of Britain over the English Channel","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Join US air operations in the Pacific Theater","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"battle_of_britain"},"\n",{"#f":5}],"c-1":["^ ",{"->":"pacific_air"},"\n",{"#f":5}]}],{"#f":1}],"stay_civilian":[["^Choosing to remain at home, you experience the war from a different perspective. Life becomes a daily struggle with rationing, blackouts, and the constant fear of air raids. Yet, you also discover the strength and solidarity of your community.","\n","^Historical Fact: During the Blitz (1940–1941), British cities like London endured sustained bombing by the German Luftwaffe, and civilians adapted by organizing shelters and community networks.","\n","^You decide to contribute to the war effort in one of two ways:","\n","ev","str","^Volunteer for a civil defense unit to help protect your community","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Join an underground resistance in an occupied territory","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"civil_defense"},"\n",{"#f":5}],"c-1":["^ ",{"->":"resistance"},"\n",{"#f":5}]}],{"#f":1}],"north_africa":[["^You are sent to North Africa, where the scorching desert and strategic importance of the region set the stage for fierce battles. The environment is unforgiving, and every drop of water and grain of sand matters in this war of attrition.","\n","^Historical Fact: The North African Campaign featured epic confrontations, notably under the command of General Erwin Rommel, known as the “Desert Fox,” and culminated in pivotal battles that shifted momentum in the Allies’ favor.","\n","^Your mission in the desert takes you to critical junctures:","\n","ev","str","^Take part in the Battle of El Alamein","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Assist in securing vital supply lines across the desert","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"el_alamein"},"\n",{"#f":5}],"c-1":["^ ",{"->":"supply_lines"},"\n",{"#f":5}]}],{"#f":1}],"eastern_front":[["^Deployed to the Eastern Front, you confront one of the war’s most brutal theaters. The vast expanses of the Soviet Union, coupled with a bitter winter, test your physical and mental limits.","\n","^Historical Fact: Operation Barbarossa, launched in June 1941, was the largest military invasion in history and marked the beginning of a devastating struggle between Nazi Germany and the Soviet Union.","\n","^Amid relentless battles and harsh conditions, you must choose your next move:","\n","ev","str","^Engage in a pivotal battle on the front lines","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Fall back to regroup and plan a strategic retreat","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"pivotal_battle"},"\n",{"#f":5}],"c-1":["^ ",{"->":"retreat_regroup"},"\n",{"#f":5}]}],{"#f":1}],"battle_of_britain":[["^Soaring above the clouds, you engage enemy fighters in a series of intense dogfights during the Battle of Britain. The roar of engines and the adrenaline of aerial combat define your days.","\n","^Historical Fact: The heroic efforts of RAF pilots during the Battle of Britain prevented a German invasion, marking the first significant defeat of Hitler’s military forces.","\n","^Your mission now offers further choices:","\n","ev","str","^Engage enemy fighters head-on in a critical dogfight","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Escort a formation of bombers on a high-risk mission","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"engage_fighters"},"\n",{"#f":5}],"c-1":["^ ",{"->":"escort_bombers"},"\n",{"#f":5}]}],{"#f":1}],"pacific_air":[["^In the vast Pacific, you join American air operations. The theater is defined by island-hopping campaigns and fierce naval engagements amid turquoise waters and dense jungles.","\n","^Historical Fact: After the attack on Pearl Harbor on December 7, 1941, the United States rapidly mobilized its military, achieving key victories such as the Battle of Midway in 1942, which proved pivotal in the Pacific.","\n","^Your next decision in this dynamic environment:","\n","ev","str","^Participate in an island campaign to secure a strategic position","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Engage enemy naval forces in a daring aerial assault","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"island_campaign"},"\n",{"#f":5}],"c-1":["^ ",{"->":"naval_engagement"},"\n",{"#f":5}]}],{"#f":1}],"civil_defense":[["^As part of a civil defense unit, you help organize air raid warnings, manage community shelters, and assist with rescue operations during bombings. Every night brings both fear and hope as the community bands together.","\n","^Historical Fact: During the Blitz, civil defense measures such as blackout procedures and public shelters saved countless lives while fostering a spirit of resilience among civilians.","\n","^Your commitment deepens:","\n","ev","str","^Experience the terror and heroism of a dramatic air raid","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Dedicate yourself to rebuilding and supporting recovery efforts after a bombing","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"air_raid"},"\n",{"#f":5}],"c-1":["^ ",{"->":"rebuild_efforts"},"\n",{"#f":5}]}],{"#f":1}],"resistance":[["^Living under occupation, you join the underground resistance—a clandestine network committed to undermining enemy operations. Risking your life daily, you work with fellow patriots to sabotage enemy plans and gather crucial intelligence.","\n","^Historical Fact: Resistance movements across Europe played a key role in disrupting enemy logistics and gathering intelligence, which later helped Allied forces plan major operations like D-Day.","\n","^Decide your method of resistance:","\n","ev","str","^Plan a daring sabotage mission against an enemy supply depot","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Devote your efforts to gathering intelligence for the Allied commanders","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"sabotage_mission"},"\n",{"#f":5}],"c-1":["^ ",{"->":"gather_intelligence"},"\n",{"#f":5}]}],{"#f":1}],"el_alamein":[["^You find yourself in the midst of the Battle of El Alamein, a turning point in the North African Campaign. The desert sands become the arena for a fierce struggle between Allied and Axis forces.","\n","^Historical Fact: The Second Battle of El Alamein (October–November 1942) marked a decisive victory for the Allies, halting Rommel’s advance and paving the way for further successes in North Africa.","\n","^After the dust settles, you reflect on the importance of strategy and logistics.","\n","ev","str","^Reflect on your experiences and prepare for the next major operation","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"supply_lines":[["^Tasked with securing and maintaining supply lines in the harsh desert, you work behind the scenes to ensure that frontline troops receive the essentials needed to continue the fight.","\n","^Historical Fact: In desert warfare, maintaining reliable supply lines was crucial; shortages of water, fuel, and ammunition could turn the tide of battle in an unforgiving environment.","\n","^Your efforts prove vital to the overall campaign.","\n","ev","str","^Return to the front lines, now better equipped and more determined","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"pivotal_battle":[["^In a critical confrontation on the Eastern Front, you engage in a battle that tests every ounce of your courage and skill. Amid the bitter cold and chaos, you fight alongside comrades whose determination never wavers.","\n","^Historical Fact: Major battles on the Eastern Front, such as the Battle of Stalingrad, were marked by extreme conditions and high casualties, shaping the course of the war.","\n","^With the battle behind you, you must decide your next course of action:","\n","ev","str","^Press on with renewed determination","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"retreat_regroup":[["^Forced to retreat in the face of overwhelming odds, you and your unit find a temporary respite behind enemy lines. This period of regrouping is filled with both sorrow and lessons learned.","\n","^Historical Fact: Strategic retreats, though painful, were sometimes necessary on the Eastern Front as Soviet forces regrouped, later mounting counterattacks that shifted the war’s momentum.","\n","^Resolved to return stronger, you join efforts to rebuild your strength.","\n","ev","str","^Prepare for the next phase of the Allied push","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"engage_fighters":[["^High above the English Channel, you dive into a fierce dogfight with enemy aircraft. The aerial ballet is dangerous and unpredictable, yet you skillfully maneuver through enemy fire.","\n","^Historical Fact: The bravery of RAF pilots during dogfights was critical to the success of the Battle of Britain, as every aerial victory helped defend the home front.","\n","^After the adrenaline rush subsides, you make your next decision.","\n","ev","str","^Return to base to regroup and plan further missions","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"escort_bombers":[["^You are assigned to escort a formation of bombers on a high-stakes mission. Amid swirling clouds and enemy fire, your role is to protect these valuable assets as they carry out their strategic bombing run.","\n","^Historical Fact: Bomber escort missions were essential during World War II; without effective protection, bombers were vulnerable to enemy fighters, resulting in significant losses.","\n","^After successfully completing your mission, you prepare for what comes next.","\n","ev","str","^Land safely and ready yourself for upcoming operations","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"island_campaign":[["^Landing on a Pacific island amid a lush yet hostile environment, you join an island-hopping campaign. The terrain is challenging, and every step forward is a victory against entrenched enemy forces.","\n","^Historical Fact: The island-hopping strategy allowed Allied forces to bypass heavily fortified Japanese positions, gradually moving closer to Japan and securing key islands along the way.","\n","^Your mission continues:","\n","ev","str","^Advance to capture the next strategic island","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"naval_engagement":[["^In a daring aerial assault, you engage enemy naval forces from the sky. The battle at sea is a complex dance of air and water power, where every maneuver counts.","\n","^Historical Fact: Naval engagements such as the Battle of Midway in 1942 demonstrated the strategic importance of aircraft carriers and marked turning points in the Pacific Theater.","\n","^After a hard-fought engagement, you consider your next step.","\n","ev","str","^Return to base after the intense encounter","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"air_raid":[["^The wail of sirens shatters the night as enemy bombers descend. You rush to a nearby shelter along with your neighbors, each moment filled with both terror and hope.","\n","^Historical Fact: During the Blitz, civilian air raids forced communities to adopt blackout measures and improvised shelters, underscoring the resilience of those on the home front.","\n","^Once the skies clear, you face the aftermath:","\n","ev","str","^Join a rescue and recovery effort to aid your community","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"rebuild_efforts"},"\n",{"#f":5}]}],{"#f":1}],"rebuild_efforts":[["^In the wake of destruction, you help clear debris, rebuild homes, and restore community spirit. Your hands-on efforts embody the determination to reclaim normalcy despite the ravages of war.","\n","^Historical Fact: Post-air raid reconstruction was essential during World War II, demonstrating the strength and unity of civilian communities under extreme adversity.","\n","^Your contributions bolster the collective morale.","\n","ev","str","^Refocus your energies as the tide of war turns","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"sabotage_mission":[["^With a small band of fellow resistance fighters, you plan a covert sabotage mission aimed at an enemy supply depot. Every detail must be perfect, as the success of this mission could disrupt vital enemy logistics.","\n","^Historical Fact: Acts of sabotage were critical in undermining the Axis war machine; such missions provided valuable support to the Allied cause by weakening enemy supply chains.","\n","^The moment of truth arrives:","\n","ev","str","^Proceed with the high-risk mission","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Reconsider and opt instead to gather intelligence","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"mission_success"},"\n",{"#f":5}],"c-1":["^ ",{"->":"gather_intelligence"},"\n",{"#f":5}]}],{"#f":1}],"gather_intelligence":[["^Determining that knowledge is a powerful weapon, you decide to gather intelligence on enemy movements and operations. Over days of careful observation and covert communication, you compile critical information.","\n","^Historical Fact: Resistance networks provided key intelligence that enabled the Allies to plan major operations such as the D-Day invasion.","\n","^Your reports are sent to Allied commanders.","\n","ev","str","^With your mission complete, join the upcoming invasion efforts","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"mission_success":[["^The sabotage mission is a success! The enemy supply depot is thrown into disarray, affecting their ability to sustain frontline operations.","\n","^Historical Fact: Disruptions in enemy logistics were instrumental in weakening Axis forces, helping to pave the way for Allied advances in various theaters of the war.","\n","^Buoyed by your success, you move forward.","\n","ev","str","^Let your actions guide you to join the broader Allied invasion plans","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"d_day_preparation"},"\n",{"#f":5}]}],{"#f":1}],"d_day_preparation":[["^As the war progresses and the Allies gain momentum, preparations for Operation Overlord—commonly known as D-Day—are set in motion. In 1944, Allied forces plan one of the largest amphibious assaults in history on the beaches of Normandy.","\n","^Historical Fact: On June 6, 1944, D-Day marked a turning point in World War II. Thousands of ships, aircraft, and troops from Allied nations stormed Normandy, beginning the liberation of Nazi-occupied Europe.","\n","^You receive orders to be part of this monumental operation.","\n","ev","str","^Join the D-Day Invasion on the beaches of Normandy","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Assume a supporting role behind the front lines to keep operations running smoothly","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"d_day_invasion"},"\n",{"#f":5}],"c-1":["^ ",{"->":"supporting_role"},"\n",{"#f":5}]}],{"#f":1}],"d_day_invasion":[["^On the morning of June 6, 1944, you board a landing craft amid roaring engines and pounding surf. The beaches of Normandy, lined with formidable enemy defenses, await your arrival. Every moment is a blend of fear, determination, and the hope of liberation.","\n","^Historical Fact: D-Day was one of the largest amphibious invasions in history and marked the beginning of the end for Nazi occupation in Europe.","\n","^Once ashore, decide your immediate action:","\n","ev","str","^Push inland with your unit to capture strategic objectives","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Hold your position on the beach and secure a defensive line","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"inland_objectives"},"\n",{"#f":5}],"c-1":["^ ",{"->":"hold_line"},"\n",{"#f":5}]}],{"#f":1}],"supporting_role":[["^Not every hero wears a uniform on the front lines. In your supporting role, you work behind the scenes coordinating logistics, managing communications, and ensuring that the soldiers have the supplies they need.","\n","^Historical Fact: Behind every major military success during World War II was a vast network of support personnel whose meticulous work kept operations running smoothly.","\n","^Your contributions are vital to the success of D-Day.","\n","ev","str","^Assist in coordinating the supply chain to ensure steady support for the troops","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Oversee communications between units to maintain seamless coordination","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"coordinate_supply"},"\n",{"#f":5}],"c-1":["^ ",{"->":"oversee_comms"},"\n",{"#f":5}]}],{"#f":1}],"inland_objectives":[["^Braving enemy fire, you lead your unit inland to secure key strategic points such as bridges, crossroads, and communication lines. Every captured objective brings the Allies closer to liberating occupied France.","\n","^Historical Fact: Securing inland objectives was critical during the Normandy invasion, as it allowed Allied forces to break through enemy lines and advance deeper into occupied territory.","\n","^Your next decision will shape the battle:","\n","ev","str","^Lead a small team to capture a vital bridge","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Provide cover fire for your comrades as they secure the area","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"capture_bridge"},"\n",{"#f":5}],"c-1":["^ ",{"->":"cover_fire"},"\n",{"#f":5}]}],{"#f":1}],"hold_line":[["^On the chaotic shores of Normandy, you focus on holding your position against fierce enemy counterattacks. The battle is grueling, and every minute counts as you help secure the beachhead for reinforcements.","\n","^Historical Fact: The ability of Allied forces to maintain their positions on the beaches during D-Day was crucial to the operation’s overall success, despite heavy casualties and relentless enemy assaults.","\n","^Decide your next tactical move:","\n","ev","str","^Hold your ground until reinforcements arrive","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Organize a counterattack to push the enemy back from the shoreline","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"reinforcements"},"\n",{"#f":5}],"c-1":["^ ",{"->":"counterattack"},"\n",{"#f":5}]}],{"#f":1}],"coordinate_supply":[["^Working around the clock, you help coordinate the delivery of ammunition, food, and medical supplies to the frontline troops. Your organizational prowess ensures that the soldiers are well-equipped to continue the fight.","\n","^Historical Fact: Efficient logistics and supply chains were essential to the success of the D-Day invasion and the subsequent Allied advances.","\n","^Satisfied with your contribution, you reflect on the importance of support roles.","\n","ev","str","^Contemplate your impact as the operation unfolds","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"epilogue"},"\n",{"#f":5}]}],{"#f":1}],"oversee_comms":[["^In the heat of battle, you maintain clear and reliable communication between command centers and frontline units. Your calm, precise work under pressure proves invaluable in the chaotic environment of war.","\n","^Historical Fact: Reliable communications were a cornerstone of military strategy during World War II, enabling coordinated actions and rapid responses on the battlefield.","\n","^Your role, though unseen by many, is critical.","\n","ev","str","^Continue your vital work as the operation progresses","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"epilogue"},"\n",{"#f":5}]}],{"#f":1}],"capture_bridge":[["^With remarkable courage, you lead your team in a daring assault to capture a key bridge. The victory disrupts enemy supply lines and provides a critical advantage for the advancing Allied forces.","\n","^Historical Fact: Securing bridges and other vital infrastructure was a priority during D-Day, often determining the speed and success of the Allied breakthrough.","\n","^Buoyed by your success, you prepare for the next challenge.","\n","ev","str","^Celebrate your achievement and ready yourself for what comes next","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"epilogue"},"\n",{"#f":5}]}],{"#f":1}],"cover_fire":[["^Under heavy enemy fire, you lay down cover fire to protect your comrades as they secure critical positions. Your selfless actions help turn the tide of battle, saving lives in the process.","\n","^Historical Fact: Acts of bravery like yours, often unsung, exemplified the valor and sacrifice of soldiers during the Normandy invasion and throughout World War II.","\n","^After the intense encounter, you take a moment to reflect.","\n","ev","str","^After the battle, contemplate the lessons learned","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"epilogue"},"\n",{"#f":5}]}],{"#f":1}],"reinforcements":[["^Standing firm on the blood-soaked sands of Normandy, you hold your position until reinforcements finally arrive. Their timely support secures the beachhead and solidifies the Allied foothold in France.","\n","^Historical Fact: The arrival of reinforcements was crucial on D-Day, as they provided the necessary strength to repel enemy counterattacks and sustain the momentum of the invasion.","\n","^Exhausted but proud, you look to the future.","\n","ev","str","^Conclude your direct combat role and reflect on the war’s impact","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"epilogue"},"\n",{"#f":5}]}],{"#f":1}],"counterattack":[["^You quickly organize a decisive counterattack, rallying your unit and pushing the enemy back from the shoreline. Your leadership and tactical acumen inspire those around you, marking a turning point on the beach.","\n","^Historical Fact: Coordinated counterattacks during D-Day helped the Allies regain lost ground and ultimately contributed to the liberation of occupied Europe.","\n","^With the enemy in retreat, you move forward with your unit.","\n","ev","str","^Advance with renewed determination as the war nears its end","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"epilogue"},"\n",{"#f":5}]}],{"#f":1}],"epilogue":[["^As the conflict draws to a close, the sacrifices of millions—soldiers and civilians alike—pave the way for a new era of peace and reconstruction. The lessons learned, both on the battlefield and at home, continue to inspire generations.","\n","^Historical Fact: World War II ended in Europe on May 8, 1945 (Victory in Europe Day) and in the Pacific on September 2, 1945, marking the conclusion of a global conflict that reshaped the world.","\n","^Whether you fought on the front lines or supported the war effort from behind the scenes, your journey is a testament to human resilience and the enduring pursuit of freedom. May the memories and lessons of these turbulent years guide us toward a better future.","\n","ev","str","^THE END","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};