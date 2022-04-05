import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


let data =[
    [
    1586179800000,
    201820400
    ],
    [
    1586266200000,
    202887200
    ],
    [
    1586352600000,
    168895200
    ],
    [
    1586439000000,
    161834800
    ],
    [
    1586784600000,
    131022800
    ],
    [
    1586871000000,
    194994800
    ],
    [
    1586957400000,
    131154400
    ],
    [
    1587043800000,
    157125200
    ],
    [
    1587130200000,
    215250000
    ],
    [
    1587389400000,
    130015200
    ],
    [
    1587475800000,
    180991600
    ],
    [
    1587562200000,
    116862400
    ],
    [
    1587648600000,
    124814400
    ],
    [
    1587735000000,
    126161200
    ],
    [
    1587994200000,
    117087600
    ],
    [
    1588080600000,
    112004800
    ],
    [
    1588167000000,
    137280800
    ],
    [
    1588253400000,
    183064000
    ],
    [
    1588339800000,
    240616800
    ],
    [
    1588599000000,
    133568000
    ],
    [
    1588685400000,
    147751200
    ],
    [
    1588771800000,
    142333600
    ],
    [
    1588858200000,
    115215200
    ],
    [
    1588944600000,
    133838400
    ],
    [
    1589203800000,
    145946400
    ],
    [
    1589290200000,
    162301200
    ],
    [
    1589376600000,
    200622400
    ],
    [
    1589463000000,
    158929200
    ],
    [
    1589549400000,
    166348400
    ],
    [
    1589808600000,
    135178400
    ],
    [
    1589895000000,
    101729600
    ],
    [
    1589981400000,
    111504800
    ],
    [
    1590067800000,
    102688800
    ],
    [
    1590154200000,
    81803200
    ],
    [
    1590499800000,
    125522000
    ],
    [
    1590586200000,
    112945200
    ],
    [
    1590672600000,
    133560800
    ],
    [
    1590759000000,
    153532400
    ],
    [
    1591018200000,
    80791200
    ],
    [
    1591104600000,
    87642800
    ],
    [
    1591191000000,
    104491200
    ],
    [
    1591277400000,
    87560400
    ],
    [
    1591363800000,
    137250400
    ],
    [
    1591623000000,
    95654400
    ],
    [
    1591709400000,
    147712400
    ],
    [
    1591795800000,
    166651600
    ],
    [
    1591882200000,
    201662400
    ],
    [
    1591968600000,
    200146000
    ],
    [
    1592227800000,
    138808800
    ],
    [
    1592314200000,
    165428800
    ],
    [
    1592400600000,
    114406400
    ],
    [
    1592487000000,
    96820400
    ],
    [
    1592573400000,
    264476000
    ],
    [
    1592832600000,
    135445200
    ],
    [
    1592919000000,
    212155600
    ],
    [
    1593005400000,
    192623200
    ],
    [
    1593091800000,
    137522400
    ],
    [
    1593178200000,
    205256800
    ],
    [
    1593437400000,
    130646000
    ],
    [
    1593523800000,
    140223200
    ],
    [
    1593610200000,
    110737200
    ],
    [
    1593696600000,
    114041600
    ],
    [
    1594042200000,
    118655600
    ],
    [
    1594128600000,
    112424400
    ],
    [
    1594215000000,
    117092000
    ],
    [
    1594301400000,
    125642800
    ],
    [
    1594387800000,
    90257200
    ],
    [
    1594647000000,
    191649200
    ],
    [
    1594733400000,
    170989200
    ],
    [
    1594819800000,
    153198000
    ],
    [
    1594906200000,
    110577600
    ],
    [
    1594992600000,
    92186800
    ],
    [
    1595251800000,
    90318000
    ],
    [
    1595338200000,
    103433200
    ],
    [
    1595424600000,
    89001600
    ],
    [
    1595511000000,
    197004400
    ],
    [
    1595597400000,
    185438800
    ],
    [
    1595856600000,
    121214000
    ],
    [
    1595943000000,
    103625600
    ],
    [
    1596029400000,
    90329200
    ],
    [
    1596115800000,
    158130000
    ],
    [
    1596202200000,
    374336800
    ],
    [
    1596461400000,
    308151200
    ],
    [
    1596547800000,
    173071600
    ],
    [
    1596634200000,
    121776800
    ],
    [
    1596720600000,
    202428800
    ],
    [
    1596807000000,
    198045600
    ],
    [
    1597066200000,
    212403600
    ],
    [
    1597152600000,
    187902400
    ],
    [
    1597239000000,
    165598000
    ],
    [
    1597325400000,
    210082000
    ],
    [
    1597411800000,
    165565200
    ],
    [
    1597671000000,
    119561600
    ],
    [
    1597757400000,
    105633600
    ],
    [
    1597843800000,
    145538000
    ],
    [
    1597930200000,
    126907200
    ],
    [
    1598016600000,
    338054800
    ],
    [
    1598275800000,
    345937600
    ],
    [
    1598362200000,
    211495600
    ],
    [
    1598448600000,
    163022400
    ],
    [
    1598535000000,
    155552400
    ],
    [
    1598621400000,
    187630000
    ],
    [
    1598880600000,
    225702700
    ],
    [
    1598967000000,
    151948100
    ],
    [
    1599053400000,
    200119000
    ],
    [
    1599139800000,
    257599600
    ],
    [
    1599226200000,
    332607200
    ],
    [
    1599571800000,
    231366600
    ],
    [
    1599658200000,
    176940500
    ],
    [
    1599744600000,
    182274400
    ],
    [
    1599831000000,
    180860300
    ],
    [
    1600090200000,
    140150100
    ],
    [
    1600176600000,
    184642000
    ],
    [
    1600263000000,
    154679000
    ],
    [
    1600349400000,
    178011000
    ],
    [
    1600435800000,
    287104900
    ],
    [
    1600695000000,
    195713800
    ],
    [
    1600781400000,
    183055400
    ],
    [
    1600867800000,
    150718700
    ],
    [
    1600954200000,
    167743300
    ],
    [
    1601040600000,
    149981400
    ],
    [
    1601299800000,
    137672400
    ],
    [
    1601386200000,
    99382200
    ],
    [
    1601472600000,
    142675200
    ],
    [
    1601559000000,
    116120400
    ],
    [
    1601645400000,
    144712000
    ],
    [
    1601904600000,
    106243800
    ],
    [
    1601991000000,
    161498200
    ],
    [
    1602077400000,
    96849000
    ],
    [
    1602163800000,
    83477200
    ],
    [
    1602250200000,
    100506900
    ],
    [
    1602509400000,
    240226800
    ],
    [
    1602595800000,
    262330500
    ],
    [
    1602682200000,
    150712000
    ],
    [
    1602768600000,
    112559200
    ],
    [
    1602855000000,
    115393800
    ],
    [
    1603114200000,
    120639300
    ],
    [
    1603200600000,
    124423700
    ],
    [
    1603287000000,
    89946000
    ],
    [
    1603373400000,
    101988000
    ],
    [
    1603459800000,
    82572600
    ],
    [
    1603719000000,
    111850700
    ],
    [
    1603805400000,
    92276800
    ],
    [
    1603891800000,
    143937800
    ],
    [
    1603978200000,
    146129200
    ],
    [
    1604064600000,
    190272600
    ],
    [
    1604327400000,
    122866900
    ],
    [
    1604413800000,
    107624400
    ],
    [
    1604500200000,
    138235500
    ],
    [
    1604586600000,
    126387100
    ],
    [
    1604673000000,
    114457900
    ],
    [
    1604932200000,
    154515300
    ],
    [
    1605018600000,
    138023400
    ],
    [
    1605105000000,
    112295000
    ],
    [
    1605191400000,
    103162300
    ],
    [
    1605277800000,
    81581900
    ],
    [
    1605537000000,
    91183000
    ],
    [
    1605623400000,
    74271000
    ],
    [
    1605709800000,
    76322100
    ],
    [
    1605796200000,
    74113000
    ],
    [
    1605882600000,
    73604300
    ],
    [
    1606141800000,
    127959300
    ],
    [
    1606228200000,
    113874200
    ],
    [
    1606314600000,
    76499200
    ],
    [
    1606487400000,
    46691300
    ],
    [
    1606746600000,
    169410200
    ],
    [
    1606833000000,
    127728200
    ],
    [
    1606919400000,
    89004200
    ],
    [
    1607005800000,
    78967600
    ],
    [
    1607092200000,
    78260400
    ],
    [
    1607351400000,
    86712000
    ],
    [
    1607437800000,
    82225500
    ],
    [
    1607524200000,
    115089200
    ],
    [
    1607610600000,
    81312200
    ],
    [
    1607697000000,
    86939800
    ],
    [
    1607956200000,
    79184500
    ],
    [
    1608042600000,
    157243700
    ],
    [
    1608129000000,
    98208600
    ],
    [
    1608215400000,
    94359800
    ],
    [
    1608301800000,
    192541500
    ],
    [
    1608561000000,
    121251600
    ],
    [
    1608647400000,
    168904800
    ],
    [
    1608733800000,
    88223700
    ],
    [
    1608820200000,
    54930100
    ],
    [
    1609165800000,
    124486200
    ],
    [
    1609252200000,
    121047300
    ],
    [
    1609338600000,
    96452100
    ],
    [
    1609425000000,
    99116600
    ],
    [
    1609770600000,
    143301900
    ],
    [
    1609857000000,
    97664900
    ],
    [
    1609943400000,
    155088000
    ],
    [
    1610029800000,
    109578200
    ],
    [
    1610116200000,
    105158200
    ],
    [
    1610375400000,
    100384500
    ],
    [
    1610461800000,
    91951100
    ],
    [
    1610548200000,
    88636800
    ],
    [
    1610634600000,
    90221800
    ],
    [
    1610721000000,
    111598500
    ],
    [
    1611066600000,
    90757300
    ],
    [
    1611153000000,
    104319500
    ],
    [
    1611239400000,
    120150900
    ],
    [
    1611325800000,
    114459400
    ],
    [
    1611585000000,
    157611700
    ],
    [
    1611671400000,
    98390600
    ],
    [
    1611757800000,
    140843800
    ],
    [
    1611844200000,
    142621100
    ],
    [
    1611930600000,
    177523800
    ],
    [
    1612189800000,
    106239800
    ],
    [
    1612276200000,
    83305400
    ],
    [
    1612362600000,
    89880900
    ],
    [
    1612449000000,
    84183100
    ],
    [
    1612535400000,
    75693800
    ],
    [
    1612794600000,
    71297200
    ],
    [
    1612881000000,
    76774200
    ],
    [
    1612967400000,
    73046600
    ],
    [
    1613053800000,
    64280000
    ],
    [
    1613140200000,
    60145100
    ],
    [
    1613485800000,
    80576300
    ],
    [
    1613572200000,
    97918500
    ],
    [
    1613658600000,
    96856700
    ],
    [
    1613745000000,
    87668800
    ],
    [
    1614004200000,
    103916400
    ],
    [
    1614090600000,
    158273000
    ],
    [
    1614177000000,
    111039900
    ],
    [
    1614263400000,
    148199500
    ],
    [
    1614349800000,
    164560400
    ],
    [
    1614609000000,
    116307900
    ],
    [
    1614695400000,
    102260900
    ],
    [
    1614781800000,
    112966300
    ],
    [
    1614868200000,
    178155000
    ],
    [
    1614954600000,
    153766600
    ],
    [
    1615213800000,
    154376600
    ],
    [
    1615300200000,
    129525800
    ],
    [
    1615386600000,
    111943300
    ],
    [
    1615473000000,
    103026500
    ],
    [
    1615559400000,
    88105100
    ],
    [
    1615815000000,
    92403800
    ],
    [
    1615901400000,
    115227900
    ],
    [
    1615987800000,
    111932600
    ],
    [
    1616074200000,
    121229700
    ],
    [
    1616160600000,
    185549500
    ],
    [
    1616419800000,
    111912300
    ],
    [
    1616506200000,
    95467100
    ],
    [
    1616592600000,
    88530500
    ],
    [
    1616679000000,
    98844700
    ],
    [
    1616765400000,
    94071200
    ],
    [
    1617024600000,
    80819200
    ],
    [
    1617111000000,
    85671900
    ],
    [
    1617197400000,
    118323800
    ],
    [
    1617283800000,
    75089100
    ],
    [
    1617629400000,
    88651200
    ],
    [
    1617715800000,
    80171300
    ],
    [
    1617802200000,
    83466700
    ],
    [
    1617888600000,
    88844600
    ],
    [
    1617975000000,
    106686700
    ],
    [
    1618234200000,
    91420000
    ],
    [
    1618320600000,
    91266500
    ],
    [
    1618407000000,
    87222800
    ],
    [
    1618493400000,
    89347100
    ],
    [
    1618579800000,
    84922400
    ],
    [
    1618839000000,
    94264200
    ],
    [
    1618925400000,
    94812300
    ],
    [
    1619011800000,
    68847100
    ],
    [
    1619098200000,
    84566500
    ],
    [
    1619184600000,
    78657500
    ],
    [
    1619443800000,
    66905100
    ],
    [
    1619530200000,
    66015800
    ],
    [
    1619616600000,
    107760100
    ],
    [
    1619703000000,
    151101000
    ],
    [
    1619789400000,
    109839500
    ],
    [
    1620048600000,
    75135100
    ],
    [
    1620135000000,
    137564700
    ],
    [
    1620221400000,
    84000900
    ],
    [
    1620307800000,
    78128300
    ],
    [
    1620394200000,
    78973300
    ],
    [
    1620653400000,
    88071200
    ],
    [
    1620739800000,
    126142800
    ],
    [
    1620826200000,
    112172300
    ],
    [
    1620912600000,
    105861300
    ],
    [
    1620999000000,
    81918000
    ],
    [
    1621258200000,
    74244600
    ],
    [
    1621344600000,
    63342900
    ],
    [
    1621431000000,
    92612000
    ],
    [
    1621517400000,
    76857100
    ],
    [
    1621603800000,
    79295400
    ],
    [
    1621863000000,
    63092900
    ],
    [
    1621949400000,
    72009500
    ],
    [
    1622035800000,
    56575900
    ],
    [
    1622122200000,
    94625600
    ],
    [
    1622208600000,
    71311100
    ],
    [
    1622554200000,
    67637100
    ],
    [
    1622640600000,
    59278900
    ],
    [
    1622727000000,
    76229200
    ],
    [
    1622813400000,
    75169300
    ],
    [
    1623072600000,
    71057600
    ],
    [
    1623159000000,
    74403800
    ],
    [
    1623245400000,
    56877900
    ],
    [
    1623331800000,
    71186400
    ],
    [
    1623418200000,
    53522400
    ],
    [
    1623677400000,
    96906500
    ],
    [
    1623763800000,
    62746300
    ],
    [
    1623850200000,
    91815000
    ],
    [
    1623936600000,
    96721700
    ],
    [
    1624023000000,
    108953300
    ],
    [
    1624282200000,
    79663300
    ],
    [
    1624368600000,
    74783600
    ],
    [
    1624455000000,
    60214200
    ],
    [
    1624541400000,
    68711000
    ],
    [
    1624627800000,
    70783700
    ],
    [
    1624887000000,
    62111300
    ],
    [
    1624973400000,
    64556100
    ],
    [
    1625059800000,
    63261400
    ],
    [
    1625146200000,
    52485800
    ],
    [
    1625232600000,
    78852600
    ],
    [
    1625578200000,
    108181800
    ],
    [
    1625664600000,
    104911600
    ],
    [
    1625751000000,
    105575500
    ],
    [
    1625837400000,
    99890800
    ],
    [
    1626096600000,
    76299700
    ],
    [
    1626183000000,
    100827100
    ],
    [
    1626269400000,
    127050800
    ],
    [
    1626355800000,
    106820300
    ],
    [
    1626442200000,
    93251400
    ],
    [
    1626701400000,
    121434600
    ],
    [
    1626787800000,
    96350000
    ],
    [
    1626874200000,
    74993500
    ],
    [
    1626960600000,
    77338200
    ],
    [
    1627047000000,
    71447400
    ],
    [
    1627306200000,
    72434100
    ],
    [
    1627392600000,
    104818600
    ],
    [
    1627479000000,
    118931200
    ],
    [
    1627565400000,
    56699500
    ],
    [
    1627651800000,
    70440600
    ],
    [
    1627911000000,
    62880000
    ],
    [
    1627997400000,
    64786600
    ],
    [
    1628083800000,
    56368300
    ],
    [
    1628170200000,
    46397700
    ],
    [
    1628256600000,
    54126800
    ],
    [
    1628515800000,
    48908700
    ],
    [
    1628602200000,
    69023100
    ],
    [
    1628688600000,
    48493500
    ],
    [
    1628775000000,
    72282600
    ],
    [
    1628861400000,
    59375000
    ],
    [
    1629120600000,
    103296000
    ],
    [
    1629207000000,
    92229700
    ],
    [
    1629293400000,
    86326000
    ],
    [
    1629379800000,
    86960300
    ],
    [
    1629466200000,
    60549600
    ],
    [
    1629725400000,
    60131800
    ],
    [
    1629811800000,
    48606400
    ],
    [
    1629898200000,
    58991300
    ],
    [
    1629984600000,
    48597200
    ],
    [
    1630071000000,
    55802400
    ],
    [
    1630330200000,
    90956700
    ],
    [
    1630416600000,
    86453100
    ],
    [
    1630503000000,
    80313700
    ],
    [
    1630589400000,
    71115500
    ],
    [
    1630675800000,
    57808700
    ],
    [
    1631021400000,
    82278300
    ],
    [
    1631107800000,
    74420200
    ],
    [
    1631194200000,
    57305700
    ],
    [
    1631280600000,
    140893200
    ],
    [
    1631539800000,
    102404300
    ],
    [
    1631626200000,
    109296300
    ],
    [
    1631712600000,
    83281300
    ],
    [
    1631799000000,
    68034100
    ],
    [
    1631885400000,
    129868800
    ],
    [
    1632144600000,
    123478900
    ],
    [
    1632231000000,
    75834000
    ],
    [
    1632317400000,
    76404300
    ],
    [
    1632403800000,
    64838200
    ],
    [
    1632490200000,
    53477900
    ],
    [
    1632749400000,
    74150700
    ],
    [
    1632835800000,
    108972300
    ],
    [
    1632922200000,
    74602000
    ],
    [
    1633008600000,
    89056700
    ],
    [
    1633095000000,
    94639600
    ],
    [
    1633354200000,
    98322000
    ],
    [
    1633440600000,
    80861100
    ],
    [
    1633527000000,
    83221100
    ],
    [
    1633613400000,
    61732700
    ],
    [
    1633699800000,
    58773200
    ],
    [
    1633959000000,
    64452200
    ],
    [
    1634045400000,
    73035900
    ],
    [
    1634131800000,
    78762700
    ],
    [
    1634218200000,
    69907100
    ],
    [
    1634304600000,
    67940300
    ],
    [
    1634563800000,
    85589200
    ],
    [
    1634650200000,
    76378900
    ],
    [
    1634736600000,
    58418800
    ],
    [
    1634823000000,
    61421000
    ],
    [
    1634909400000,
    58883400
    ],
    [
    1635168600000,
    50720600
    ],
    [
    1635255000000,
    60893400
    ],
    [
    1635341400000,
    56094900
    ],
    [
    1635427800000,
    100077900
    ],
    [
    1635514200000,
    124953200
    ],
    [
    1635773400000,
    74588300
    ],
    [
    1635859800000,
    69122000
    ],
    [
    1635946200000,
    54511500
    ],
    [
    1636032600000,
    60394600
    ],
    [
    1636119000000,
    65463900
    ],
    [
    1636381800000,
    55020900
    ],
    [
    1636468200000,
    56787900
    ],
    [
    1636554600000,
    65187100
    ],
    [
    1636641000000,
    41000000
    ],
    [
    1636727400000,
    63804000
    ],
    [
    1636986600000,
    59222800
    ],
    [
    1637073000000,
    59256200
    ],
    [
    1637159400000,
    88807000
    ],
    [
    1637245800000,
    137827700
    ],
    [
    1637332200000,
    117305600
    ],
    [
    1637591400000,
    117467900
    ],
    [
    1637677800000,
    96041900
    ],
    [
    1637764200000,
    69463600
    ],
    [
    1637937000000,
    76959800
    ],
    [
    1638196200000,
    88748200
    ],
    [
    1638282600000,
    174048100
    ],
    [
    1638369000000,
    152052500
    ],
    [
    1638455400000,
    136739200
    ],
    [
    1638541800000,
    118023100
    ],
    [
    1638801000000,
    107497000
    ],
    [
    1638887400000,
    120405400
    ],
    [
    1638973800000,
    116998900
    ],
    [
    1639060200000,
    108923700
    ],
    [
    1639146600000,
    115402700
    ],
    [
    1639405800000,
    153237000
    ],
    [
    1639492200000,
    139380400
    ],
    [
    1639578600000,
    131063300
    ],
    [
    1639665000000,
    150185800
    ],
    [
    1639751400000,
    195432700
    ],
    [
    1640010600000,
    107499100
    ],
    [
    1640097000000,
    91185900
    ],
    [
    1640183400000,
    92135300
    ],
    [
    1640269800000,
    68356600
    ],
    [
    1640615400000,
    74919600
    ],
    [
    1640701800000,
    79144300
    ],
    [
    1640788200000,
    62348900
    ],
    [
    1640874600000,
    59773000
    ],
    [
    1640961000000,
    64062300
    ],
    [
    1641220200000,
    104487900
    ],
    [
    1641306600000,
    99310400
    ],
    [
    1641393000000,
    94537600
    ],
    [
    1641479400000,
    96904000
    ],
    [
    1641565800000,
    86709100
    ],
    [
    1641825000000,
    106765600
    ],
    [
    1641911400000,
    76138300
    ],
    [
    1641997800000,
    74805200
    ],
    [
    1642084200000,
    84505800
    ],
    [
    1642170600000,
    80440800
    ],
    [
    1642516200000,
    90956700
    ],
    [
    1642602600000,
    94815000
    ],
    [
    1642689000000,
    91420500
    ],
    [
    1642775400000,
    122848900
    ],
    [
    1643034600000,
    162294600
    ],
    [
    1643121000000,
    115798400
    ],
    [
    1643207400000,
    108275300
    ],
    [
    1643293800000,
    121954600
    ],
    [
    1643380200000,
    179935700
    ],
    [
    1643639400000,
    115541600
    ],
    [
    1643725800000,
    86213900
    ],
    [
    1643812200000,
    84914300
    ],
    [
    1643898600000,
    89418100
    ],
    [
    1643985000000,
    82465400
    ],
    [
    1644244200000,
    77251200
    ],
    [
    1644330600000,
    74829200
    ],
    [
    1644417000000,
    71285000
    ],
    [
    1644503400000,
    90865900
    ],
    [
    1644589800000,
    98670700
    ],
    [
    1644849000000,
    86185500
    ],
    [
    1644935400000,
    62527400
    ],
    [
    1645021800000,
    61177400
    ],
    [
    1645108200000,
    69589300
    ],
    [
    1645194600000,
    82772700
    ],
    [
    1645540200000,
    91162800
    ],
    [
    1645626600000,
    90009200
    ],
    [
    1645713000000,
    141147500
    ],
    [
    1645799400000,
    91974200
    ],
    [
    1646058600000,
    94869100
    ],
    [
    1646145000000,
    83474400
    ],
    [
    1646231400000,
    79724800
    ],
    [
    1646317800000,
    76678400
    ],
    [
    1646404200000,
    83737200
    ],
    [
    1646663400000,
    96418800
    ],
    [
    1646749800000,
    131148300
    ],
    [
    1646836200000,
    91454900
    ],
    [
    1646922600000,
    105342000
    ],
    [
    1647009000000,
    96836300
    ],
    [
    1647264600000,
    108732100
    ],
    [
    1647351000000,
    92964300
    ],
    [
    1647437400000,
    102300200
    ],
    [
    1647523800000,
    75615400
    ],
    [
    1647610200000,
    123351200
    ],
    [
    1647869400000,
    95811400
    ],
    [
    1647955800000,
    81532000
    ],
    [
    1648042200000,
    98062700
    ],
    [
    1648128600000,
    90131400
    ],
    [
    1648215000000,
    80546200
    ],
    [
    1648474200000,
    90371900
    ],
    [
    1648560600000,
    100589400
    ],
    [
    1648647000000,
    92633200
    ],
    [
    1648733400000,
    103049300
    ],
    [
    1648819800000,
    78699800
    ],
    [
    1649079000000,
    76468400
    ]
    ]
const options = {
    // navigator: {
    //     enabled:  true,
    //   },
    //   scrollbar: {
    //     enabled: true,
    //   },
    
    // chart: {
    //     type: 'column'
    //   },

    //   xAxis: {

    //     lineWidth: 3,
    //     lineColor: "#A9A9A9",
    //     labels:
    //       {
    //             style: {
    //               color: "black",
    //               fontSize: "11px",
    //             },
    //           },
    //   },
    //   rangeSelector: {
    //     //zoomType: "",
    //     enabled: true,
    //     //        selected: 0,
    //     allButtonsEnabled: true,
    //     buttons: [
    //       {
    //         type: "day",
    //         count: 7,
    //         text: "1w",
    //       },
    //       {
    //         type: "month",
    //         count: 1,
    //         text: "1m",
    //       },
    //       {
    //         type: "month",
    //         count: 3,
    //         text: "3m",
    //       },
    //       {
    //         type: "month",
    //         count: 6,
    //         text: "6m",
    //       },
    //       {
    //         type: "ytd",
    //         text: "YTD",
    //       },
    //       {
    //         type: "year",
    //         count: 1,
    //         text: "1y",
    //       },
    //       {
    //         type: "all",
    //         text: "All",
    //       },
    //     ],
    //   },
  
    //   title: {
    //     text: 'Expense'
    //   },
    
    // //   xAxis: {
    // //     categories: ['October 2021', 'October 2021', 'OCtober 2022']
    // //   },
    
    // //   yAxis: {
    // //     allowDecimals: false,
    // //     min: 0,
    // //     title: {
    // //       text: 'Number of fruits'
    // //     }
    // //   },
    
    //   tooltip: {
    //     formatter: function () {
    //       return '<b>' + this.x + '</b><br/>' +
    //         this.series.name + ': ' + this.y + '<br/>' +
    //         'Total: ' + this.point.stackTotal;
    //     }
    //   },
    
    //   plotOptions: {
    //     column: {
    //       stacking: 'normal'
    //     }
    //   },
    
    //   series: [{
    //     name: 'Must',
    //     data: [5, 3, 4,5, 3, 4,5, 3, 4,5, 3, 4,5, 3, 4,5, 3, 4,5, 3, 4,5, 3, 4,5, 3, 4,5],
    //     stack: 'Expense'
    //   }, {
    //     name: 'Need',
    //     data: [3, 4, 4,5, 3, 4,3, 4, 4,5, 3, 4,3, 4, 4,5, 3, 4,3, 4, 4,5, 3, 4,3, 4, 4,5,],
    //     stack: 'Expense'
    //   }, {
    //     name: 'Want',
    //     data: [2, 5, 6,3, 4, 4,5, 3, 4,2, 5, 6,3, 4, 4,5, 3, 4,2, 5, 6,3, 4, 4,5, 3, 4,2],
    //     stack: 'Expense'
    //   }, ]
      
  
    
        chart: {
            alignTicks: false
        },

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Volume'
        },

        series: [{
            type: 'column',
            name: 'AAPL Stock Volume',
            data: data,
            dataGrouping: {
                units: [[
                    'week', // unit name
                    [1] // allowed multiples
                ], [
                    'month',
                    [1, 2, 3, 4, 6]
                ]]
            }
        }]
    }



const BarChart = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
constructorType={"stockChart"}
    options={options}
  />
</div>

export default BarChart;