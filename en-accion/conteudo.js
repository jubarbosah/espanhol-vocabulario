/* ==================================================================
   EN ACCIÓN · CONTEÚDO CURADO   (Espanha · conversar + viajar/morar)
   tag: g/a/b/r → 🟢 igual · 🟡 parecida · 🔵 diferente · 🔴 falso amigo
   Cada item = alvo dentro de frase(s) curta(s) e reais.
   Verbos polissêmicos trazem VÁRIOS sentidos (várias sentences).
   ================================================================== */
const CONTENT = [

/* ===== DIÁLOGOS (imersão) ===== */
{id:"d1",type:"dialog",tag:"b",word:"En la cafetería",lines:[
  {es:"— Hola, ¿qué te pongo?",pt:"— Oi, o que vai querer?"},
  {es:"— Un café con leche, por favor.",pt:"— Um café com leite, por favor."},
  {es:"— ¿Algo más?",pt:"— Mais alguma coisa?"},
  {es:"— No, nada más. La cuenta, por favor.",pt:"— Não, só isso. A conta, por favor."},
  {es:"— Son tres euros.",pt:"— São três euros."},
  {es:"— Vale, gracias.",pt:"— Ok, obrigada."}]},
{id:"d2",type:"dialog",tag:"b",word:"Quedar con un amigo",lines:[
  {es:"— ¿Quedamos esta tarde?",pt:"— Combinamos hoje à tarde?"},
  {es:"— Vale. ¿Dónde quedamos?",pt:"— Ok. Onde a gente se encontra?"},
  {es:"— En la plaza, ¿te va bien?",pt:"— Na praça, pra você tá bom?"},
  {es:"— Perfecto. Hasta luego.",pt:"— Perfeito. Até mais."}]},

/* ===== TEMA 1 · CIDADE, TRANSPORTE E SERVIÇOS ===== */
{id:"n_calle",type:"noun",tag:"b",word:"la calle",gloss:"rua",sentences:[{es:"La tienda está en esta calle.",pt:"A loja fica nesta rua.",target:"calle"}]},
{id:"n_barrio",type:"noun",tag:"b",word:"el barrio",gloss:"bairro",sentences:[{es:"Vivo en un barrio tranquilo.",pt:"Moro num bairro tranquilo.",target:"barrio"}]},
{id:"n_coche",type:"noun",tag:"b",word:"el coche",gloss:"carro",sentences:[{es:"No tengo coche, voy en metro.",pt:"Não tenho carro, vou de metrô.",target:"coche"}]},
{id:"n_metro",type:"noun",tag:"g",word:"el metro",gloss:"metrô",sentences:[{es:"El metro cierra a la una.",pt:"O metrô fecha à uma.",target:"metro"}]},
{id:"n_autobus",type:"noun",tag:"b",word:"el autobús",gloss:"ônibus",sentences:[{es:"Cojo el autobús cada día.",pt:"Pego o ônibus todo dia.",target:"autobús"}]},
{id:"n_parada",type:"noun",tag:"b",word:"la parada",gloss:"ponto (de ônibus)",sentences:[{es:"Te espero en la parada.",pt:"Te espero no ponto.",target:"parada"}]},
{id:"n_billete",type:"noun",tag:"a",word:"el billete",gloss:"passagem / bilhete / nota",sentences:[{es:"¿Dónde compro el billete?",pt:"Onde compro a passagem?",target:"billete"}]},
{id:"n_cajero",type:"noun",tag:"b",word:"el cajero",gloss:"caixa eletrônico",sentences:[{es:"Saco dinero en el cajero.",pt:"Saco dinheiro no caixa eletrônico.",target:"cajero"}]},
{id:"n_tienda",type:"noun",tag:"b",word:"la tienda",gloss:"loja",sentences:[{es:"La tienda abre a las diez.",pt:"A loja abre às dez.",target:"tienda"}]},
{id:"n_oficina",type:"noun",tag:"r",word:"la oficina",gloss:"escritório",note:"🔴 <b>Falso amigo:</b> NÃO é oficina/mecânica — isso é <span class='es'>taller</span>.",sentences:[{es:"Trabaja en una oficina del centro.",pt:"Trabalha num escritório do centro.",target:"oficina"}]},
{id:"n_ayto",type:"noun",tag:"b",word:"el ayuntamiento",gloss:"prefeitura",sentences:[{es:"Tengo una cita en el ayuntamiento.",pt:"Tenho hora marcada na prefeitura.",target:"ayuntamiento"}]},
{id:"n_sello",type:"noun",tag:"a",word:"el sello",gloss:"selo / carimbo",note:"Igual ao PT: vale para selo de correio e carimbo.",sentences:[{es:"Necesito un sello para la carta.",pt:"Preciso de um selo pra carta.",target:"sello"}]},
{id:"n_cola",type:"noun",tag:"r",word:"la cola",gloss:"fila",note:"🔴 <b>Falso amigo:</b> aqui é fila (tb. rabo). Não é cola de colar.",sentences:[{es:"Hay mucha cola en el banco.",pt:"Tem muita fila no banco.",target:"cola"}]},
{id:"n_cita",type:"noun",tag:"r",word:"la cita",gloss:"hora marcada / consulta",note:"🔴 <span class='es'>pedir cita</span> = marcar hora (médico, banco).",sentences:[{es:"Pedí cita con el médico.",pt:"Marquei consulta com o médico.",target:"cita"}]},
{id:"n_acera",type:"noun",tag:"b",word:"la acera",gloss:"calçada",sentences:[{es:"El coche está en la acera.",pt:"O carro está na calçada.",target:"acera"}]},
{id:"n_atasco",type:"noun",tag:"b",word:"el atasco",gloss:"engarrafamento",sentences:[{es:"Había mucho atasco hoy.",pt:"Tinha muito engarrafamento hoje.",target:"atasco"}]},
{id:"n_esquina",type:"noun",tag:"a",word:"la esquina",gloss:"esquina",sentences:[{es:"Gira en la esquina.",pt:"Vire na esquina.",target:"esquina"}]},
{id:"n_semaforo",type:"noun",tag:"g",word:"el semáforo",gloss:"semáforo",sentences:[{es:"Para en el semáforo.",pt:"Para no semáforo.",target:"semáforo"}]},
{id:"n_plaza",type:"noun",tag:"a",word:"la plaza",gloss:"praça",sentences:[{es:"Quedamos en la plaza.",pt:"Combinamos de nos ver na praça.",target:"plaza"}]},
{id:"n_banco",type:"noun",tag:"a",word:"el banco",gloss:"banco",sentences:[{es:"El banco cierra a las dos.",pt:"O banco fecha às duas.",target:"banco"}]},
{id:"n_correos",type:"noun",tag:"b",word:"correos",gloss:"correio",sentences:[{es:"Voy a correos a por sellos.",pt:"Vou ao correio buscar selos.",target:"correos"}]},

/* ===== TEMA 2 · CASA E CÔMODOS ===== */
{id:"n_casa",type:"noun",tag:"b",word:"la casa",gloss:"casa",sentences:[{es:"Mi casa es pequeña.",pt:"Minha casa é pequena.",target:"casa"}]},
{id:"n_piso",type:"noun",tag:"r",word:"el piso",gloss:"apartamento",note:"🔴 <b>Falso amigo:</b> piso = apartamento. «Andar» é <span class='es'>planta</span>.",sentences:[{es:"Vivo en un piso de alquiler.",pt:"Moro num apartamento alugado.",target:"piso"}]},
{id:"n_alquiler",type:"noun",tag:"b",word:"el alquiler",gloss:"aluguel",sentences:[{es:"El alquiler es muy caro.",pt:"O aluguel é muito caro.",target:"alquiler"}]},
{id:"n_llave",type:"noun",tag:"a",word:"la llave",gloss:"chave",sentences:[{es:"No encuentro las llaves.",pt:"Não acho as chaves.",target:"llaves"}]},
{id:"n_puerta",type:"noun",tag:"b",word:"la puerta",gloss:"porta",sentences:[{es:"Cierra la puerta, por favor.",pt:"Fecha a porta, por favor.",target:"puerta"}]},
{id:"n_ventana",type:"noun",tag:"b",word:"la ventana",gloss:"janela",sentences:[{es:"Abre la ventana, hace calor.",pt:"Abre a janela, está calor.",target:"ventana"}]},
{id:"n_habitacion",type:"noun",tag:"b",word:"la habitación",gloss:"quarto / cômodo",sentences:[{es:"La habitación tiene mucha luz.",pt:"O quarto tem muita luz.",target:"habitación"}]},
{id:"n_cocina",type:"noun",tag:"b",word:"la cocina",gloss:"cozinha",sentences:[{es:"Preparo la cena en la cocina.",pt:"Preparo o jantar na cozinha.",target:"cocina"}]},
{id:"n_bano",type:"noun",tag:"b",word:"el baño",gloss:"banheiro",sentences:[{es:"¿Dónde está el baño?",pt:"Onde fica o banheiro?",target:"baño"}]},
{id:"n_salon",type:"noun",tag:"r",word:"el salón",gloss:"sala de estar",note:"🔴 <b>Falso amigo:</b> salón = sala de estar, não «salão».",sentences:[{es:"Vemos la tele en el salón.",pt:"A gente vê TV na sala.",target:"salón"}]},
{id:"n_cama",type:"noun",tag:"b",word:"la cama",gloss:"cama",sentences:[{es:"Me voy a la cama.",pt:"Vou pra cama.",target:"cama"}]},
{id:"n_mesa",type:"noun",tag:"b",word:"la mesa",gloss:"mesa",sentences:[{es:"Pon los platos en la mesa.",pt:"Põe os pratos na mesa.",target:"mesa"}]},
{id:"n_silla",type:"noun",tag:"b",word:"la silla",gloss:"cadeira",sentences:[{es:"Falta una silla.",pt:"Falta uma cadeira.",target:"silla"}]},
{id:"n_suelo",type:"noun",tag:"b",word:"el suelo",gloss:"chão",sentences:[{es:"Se cayó al suelo.",pt:"Caiu no chão.",target:"suelo"}]},
{id:"n_pared",type:"noun",tag:"a",word:"la pared",gloss:"parede",sentences:[{es:"Hay un cuadro en la pared.",pt:"Tem um quadro na parede.",target:"pared"}]},
{id:"n_techo",type:"noun",tag:"a",word:"el techo",gloss:"teto",sentences:[{es:"El techo es muy alto.",pt:"O teto é bem alto.",target:"techo"}]},
{id:"n_nevera",type:"noun",tag:"b",word:"la nevera",gloss:"geladeira",sentences:[{es:"La leche está en la nevera.",pt:"O leite está na geladeira.",target:"nevera"}]},
{id:"n_mueble",type:"noun",tag:"b",word:"el mueble",gloss:"móvel",sentences:[{es:"Compramos un mueble nuevo.",pt:"Compramos um móvel novo.",target:"mueble"}]},
{id:"n_grifo",type:"noun",tag:"b",word:"el grifo",gloss:"torneira",sentences:[{es:"Cierra el grifo, gotea.",pt:"Fecha a torneira, está pingando.",target:"grifo"}]},
{id:"n_basura",type:"noun",tag:"b",word:"la basura",gloss:"lixo",sentences:[{es:"Saca la basura, por favor.",pt:"Põe o lixo pra fora, por favor.",target:"basura"}]},

/* ===== TEMA 3 · COMIDA E RESTAURANTE (muito falso amigo) ===== */
{id:"n_comida",type:"noun",tag:"b",word:"la comida",gloss:"comida / almoço (Espanha)",sentences:[{es:"La comida está muy rica.",pt:"A comida está muito gostosa.",target:"comida"}]},
{id:"n_desayuno",type:"noun",tag:"b",word:"el desayuno",gloss:"café da manhã",sentences:[{es:"El desayuno es a las ocho.",pt:"O café da manhã é às oito.",target:"desayuno"}]},
{id:"n_cena",type:"noun",tag:"r",word:"la cena",gloss:"jantar",note:"🔴 <b>Falso amigo:</b> cena = jantar. Nada a ver com «cena/scene».",sentences:[{es:"La cena es a las nueve.",pt:"O jantar é às nove.",target:"cena"}]},
{id:"n_pan",type:"noun",tag:"b",word:"el pan",gloss:"pão",sentences:[{es:"Compro pan en la panadería.",pt:"Compro pão na padaria.",target:"pan"}]},
{id:"n_huevo",type:"noun",tag:"b",word:"el huevo",gloss:"ovo",sentences:[{es:"Quiero huevos fritos.",pt:"Quero ovos fritos.",target:"huevos"}]},
{id:"n_leche",type:"noun",tag:"b",word:"la leche",gloss:"leite",sentences:[{es:"Un café con leche.",pt:"Um café com leite.",target:"leche"}]},
{id:"n_agua",type:"noun",tag:"a",word:"el agua",gloss:"água",sentences:[{es:"¿Me pones un vaso de agua?",pt:"Me dá um copo de água?",target:"agua"}]},
{id:"n_vino",type:"noun",tag:"b",word:"el vino",gloss:"vinho",sentences:[{es:"Una copa de vino tinto.",pt:"Uma taça de vinho tinto.",target:"vino"}]},
{id:"n_cerveza",type:"noun",tag:"b",word:"la cerveza",gloss:"cerveja",sentences:[{es:"Dos cervezas, por favor.",pt:"Duas cervejas, por favor.",target:"cervezas"}]},
{id:"n_carne",type:"noun",tag:"a",word:"la carne",gloss:"carne",sentences:[{es:"No como carne.",pt:"Não como carne.",target:"carne"}]},
{id:"n_pollo",type:"noun",tag:"b",word:"el pollo",gloss:"frango",sentences:[{es:"Pollo con patatas, por favor.",pt:"Frango com batatas, por favor.",target:"Pollo"}]},
{id:"n_pescado",type:"noun",tag:"b",word:"el pescado",gloss:"peixe",sentences:[{es:"El pescado está muy fresco.",pt:"O peixe está bem fresco.",target:"pescado"}]},
{id:"n_verdura",type:"noun",tag:"b",word:"la verdura",gloss:"verdura / legume",sentences:[{es:"Come más verdura.",pt:"Coma mais verdura.",target:"verdura"}]},
{id:"n_vaso",type:"noun",tag:"r",word:"el vaso",gloss:"copo",note:"🔴 <b>Falso amigo:</b> vaso = copo. «Taça» é <span class='es'>copa</span>.",sentences:[{es:"¿Me traes un vaso de agua?",pt:"Me traz um copo de água?",target:"vaso"}]},
{id:"n_taza",type:"noun",tag:"r",word:"la taza",gloss:"xícara / caneca",note:"🔴 <b>Falso amigo:</b> taza = xícara. Não é «taça».",sentences:[{es:"Una taza de té.",pt:"Uma xícara de chá.",target:"taza"}]},
{id:"n_copa",type:"noun",tag:"r",word:"la copa",gloss:"taça",note:"🔴 taça de vinho; tb. «tomar una copa» = beber um drink.",sentences:[{es:"Una copa de vino.",pt:"Uma taça de vinho.",target:"copa"}]},
{id:"n_plato",type:"noun",tag:"b",word:"el plato",gloss:"prato",sentences:[{es:"Este plato está buenísimo.",pt:"Este prato está delicioso.",target:"plato"}]},
{id:"n_cuenta",type:"noun",tag:"b",word:"la cuenta",gloss:"conta",sentences:[{es:"La cuenta, por favor.",pt:"A conta, por favor.",target:"cuenta"}]},
{id:"n_propina",type:"noun",tag:"r",word:"la propina",gloss:"gorjeta",note:"🔴 <b>Falso amigo:</b> propina = gorjeta. «Suborno» é <span class='es'>soborno</span>.",sentences:[{es:"Dejé propina en la mesa.",pt:"Deixei gorjeta na mesa.",target:"propina"}]},
{id:"n_camarero",type:"noun",tag:"b",word:"el camarero",gloss:"garçom",sentences:[{es:"El camarero es muy amable.",pt:"O garçom é muito gentil.",target:"camarero"}]},
{id:"n_carta",type:"noun",tag:"r",word:"la carta",gloss:"cardápio (e carta)",note:"🔴 No restaurante, <span class='es'>la carta</span> = o cardápio.",sentences:[{es:"¿Nos trae la carta?",pt:"Você traz o cardápio?",target:"carta"}]},
{id:"n_mantequilla",type:"noun",tag:"a",word:"la mantequilla",gloss:"manteiga",note:"Parecida ao PT: mantequilla = manteiga.",sentences:[{es:"Pan con mantequilla.",pt:"Pão com manteiga.",target:"mantequilla"}]},

/* ===== TEMA 4 · COMPRAS, ROUPA E DINHEIRO ===== */
{id:"n_dinero",type:"noun",tag:"b",word:"el dinero",gloss:"dinheiro",sentences:[{es:"No llevo dinero encima.",pt:"Não estou com dinheiro comigo.",target:"dinero"}]},
{id:"n_tarjeta",type:"noun",tag:"b",word:"la tarjeta",gloss:"cartão",sentences:[{es:"¿Puedo pagar con tarjeta?",pt:"Posso pagar no cartão?",target:"tarjeta"}]},
{id:"n_precio",type:"noun",tag:"a",word:"el precio",gloss:"preço",sentences:[{es:"¿Qué precio tiene?",pt:"Qual é o preço?",target:"precio"}]},
{id:"n_rebajas",type:"noun",tag:"b",word:"las rebajas",gloss:"promoção / liquidação",sentences:[{es:"Hay rebajas en verano.",pt:"Tem liquidação no verão.",target:"rebajas"}]},
{id:"n_ropa",type:"noun",tag:"b",word:"la ropa",gloss:"roupa",sentences:[{es:"Necesito ropa de invierno.",pt:"Preciso de roupa de inverno.",target:"ropa"}]},
{id:"n_camisa",type:"noun",tag:"g",word:"la camisa",gloss:"camisa",sentences:[{es:"Me gusta esta camisa.",pt:"Gosto desta camisa.",target:"camisa"}]},
{id:"n_camiseta",type:"noun",tag:"g",word:"la camiseta",gloss:"camiseta",sentences:[{es:"Una camiseta blanca.",pt:"Uma camiseta branca.",target:"camiseta"}]},
{id:"n_pantalon",type:"noun",tag:"a",word:"el pantalón",gloss:"calça",sentences:[{es:"Este pantalón me queda bien.",pt:"Essa calça fica bem em mim.",target:"pantalón"}]},
{id:"n_falda",type:"noun",tag:"b",word:"la falda",gloss:"saia",sentences:[{es:"Lleva una falda negra.",pt:"Ela usa uma saia preta.",target:"falda"}]},
{id:"n_vestido",type:"noun",tag:"g",word:"el vestido",gloss:"vestido",sentences:[{es:"Un vestido muy bonito.",pt:"Um vestido muito bonito.",target:"vestido"}]},
{id:"n_abrigo",type:"noun",tag:"b",word:"el abrigo",gloss:"casaco",sentences:[{es:"Ponte el abrigo, hace frío.",pt:"Põe o casaco, está frio.",target:"abrigo"}]},
{id:"n_zapato",type:"noun",tag:"a",word:"el zapato",gloss:"sapato",sentences:[{es:"Estos zapatos son cómodos.",pt:"Esses sapatos são confortáveis.",target:"zapatos"}]},
{id:"n_zapatilla",type:"noun",tag:"b",word:"la zapatilla",gloss:"tênis",sentences:[{es:"Corro con zapatillas.",pt:"Corro de tênis.",target:"zapatillas"}]},
{id:"n_bolso",type:"noun",tag:"b",word:"el bolso",gloss:"bolsa",sentences:[{es:"Llevo las llaves en el bolso.",pt:"Levo as chaves na bolsa.",target:"bolso"}]},
{id:"n_talla",type:"noun",tag:"b",word:"la talla",gloss:"tamanho (de roupa)",sentences:[{es:"¿Qué talla usas?",pt:"Que tamanho você usa?",target:"talla"}]},
{id:"n_probador",type:"noun",tag:"b",word:"el probador",gloss:"provador",sentences:[{es:"¿Dónde está el probador?",pt:"Onde fica o provador?",target:"probador"}]},
{id:"n_caja",type:"noun",tag:"a",word:"la caja",gloss:"caixa (de pagar)",sentences:[{es:"Pague en caja, por favor.",pt:"Pague no caixa, por favor.",target:"caja"}]},
{id:"n_descuento",type:"noun",tag:"g",word:"el descuento",gloss:"desconto",sentences:[{es:"¿Tienen descuento?",pt:"Tem desconto?",target:"descuento"}]},
{id:"n_gratis",type:"noun",tag:"a",word:"gratis",gloss:"grátis",sentences:[{es:"La entrega es gratis.",pt:"A entrega é grátis.",target:"gratis"}]},

/* ===== TEMA 5 · CORPO E SAÚDE / FARMÁCIA ===== */
{id:"n_cabeza",type:"noun",tag:"b",word:"la cabeza",gloss:"cabeça",sentences:[{es:"Me duele la cabeza.",pt:"Minha cabeça dói.",target:"cabeza"}]},
{id:"n_cara",type:"noun",tag:"b",word:"la cara",gloss:"rosto / cara",sentences:[{es:"Tienes buena cara hoy.",pt:"Você está com boa aparência hoje.",target:"cara"}]},
{id:"n_ojo",type:"noun",tag:"b",word:"el ojo",gloss:"olho",sentences:[{es:"Me pica el ojo.",pt:"Meu olho está coçando.",target:"ojo"}]},
{id:"n_oido",type:"noun",tag:"b",word:"el oído",gloss:"ouvido",sentences:[{es:"Me duele el oído.",pt:"Meu ouvido dói.",target:"oído"}]},
{id:"n_garganta",type:"noun",tag:"b",word:"la garganta",gloss:"garganta",sentences:[{es:"Me duele la garganta.",pt:"Minha garganta dói.",target:"garganta"}]},
{id:"n_espalda",type:"noun",tag:"b",word:"la espalda",gloss:"costas",note:"🔵 espalda = as costas (inteiras). Ombro é <span class='es'>hombro</span>.",sentences:[{es:"Me duele la espalda.",pt:"Minhas costas doem.",target:"espalda"}]},
{id:"n_cuello",type:"noun",tag:"b",word:"el cuello",gloss:"pescoço",sentences:[{es:"Tengo el cuello rígido.",pt:"Estou com o pescoço duro.",target:"cuello"}]},
{id:"n_pierna",type:"noun",tag:"b",word:"la pierna",gloss:"perna",sentences:[{es:"Me duele la pierna.",pt:"Minha perna dói.",target:"pierna"}]},
{id:"n_pie",type:"noun",tag:"b",word:"el pie",gloss:"pé",sentences:[{es:"Me duele el pie.",pt:"Meu pé dói.",target:"pie"}]},
{id:"n_mano",type:"noun",tag:"b",word:"la mano",gloss:"mão",sentences:[{es:"Dame la mano.",pt:"Me dá a mão.",target:"mano"}]},
{id:"n_dolor",type:"noun",tag:"b",word:"el dolor",gloss:"dor",sentences:[{es:"Tengo un dolor aquí.",pt:"Tenho uma dor aqui.",target:"dolor"}]},
{id:"n_fiebre",type:"noun",tag:"b",word:"la fiebre",gloss:"febre",sentences:[{es:"Creo que tengo fiebre.",pt:"Acho que estou com febre.",target:"fiebre"}]},
{id:"n_resfriado",type:"noun",tag:"b",word:"el resfriado",gloss:"resfriado",sentences:[{es:"Tengo un resfriado.",pt:"Estou resfriado.",target:"resfriado"}]},
{id:"n_constipado",type:"noun",tag:"r",word:"constipado",gloss:"resfriado (adj.)",note:"🔴 <b>Falso amigo:</b> constipado = resfriado, NÃO «preso do intestino».",sentences:[{es:"Estoy constipado.",pt:"Estou resfriado.",target:"constipado"}]},
{id:"n_pastilla",type:"noun",tag:"b",word:"la pastilla",gloss:"comprimido / pílula",sentences:[{es:"Toma una pastilla.",pt:"Toma um comprimido.",target:"pastilla"}]},
{id:"n_farmacia",type:"noun",tag:"g",word:"la farmacia",gloss:"farmácia",sentences:[{es:"¿Hay una farmacia cerca?",pt:"Tem uma farmácia perto?",target:"farmacia"}]},
{id:"n_medico",type:"noun",tag:"b",word:"el médico",gloss:"médico",sentences:[{es:"Voy al médico mañana.",pt:"Vou ao médico amanhã.",target:"médico"}]},
{id:"n_herida",type:"noun",tag:"b",word:"la herida",gloss:"ferida / machucado",sentences:[{es:"Tiene una herida en el brazo.",pt:"Ele tem um machucado no braço.",target:"herida"}]},

/* ===== TEMA 6 · DINHEIRO, BANCO E BUROCRACIA ===== */
{id:"n_factura",type:"noun",tag:"b",word:"la factura",gloss:"fatura / nota fiscal",sentences:[{es:"¿Me da la factura?",pt:"Me dá a nota fiscal?",target:"factura"}]},
{id:"n_recibo",type:"noun",tag:"a",word:"el recibo",gloss:"recibo / comprovante",sentences:[{es:"Guarda el recibo.",pt:"Guarda o comprovante.",target:"recibo"}]},
{id:"n_prestamo",type:"noun",tag:"b",word:"el préstamo",gloss:"empréstimo",sentences:[{es:"Pedí un préstamo al banco.",pt:"Pedi um empréstimo ao banco.",target:"préstamo"}]},
{id:"n_sueldo",type:"noun",tag:"r",word:"el sueldo",gloss:"salário",note:"🔴 <b>Falso amigo:</b> sueldo = salário (parece «soldo»).",sentences:[{es:"Cobro el sueldo a fin de mes.",pt:"Recebo o salário no fim do mês.",target:"sueldo"}]},
{id:"n_nomina",type:"noun",tag:"b",word:"la nómina",gloss:"contracheque / folha",sentences:[{es:"Me llegó la nómina.",pt:"Chegou meu contracheque.",target:"nómina"}]},
{id:"n_impuesto",type:"noun",tag:"b",word:"el impuesto",gloss:"imposto",sentences:[{es:"Hay que pagar impuestos.",pt:"É preciso pagar impostos.",target:"impuestos"}]},
{id:"n_seguro",type:"noun",tag:"b",word:"el seguro",gloss:"seguro",sentences:[{es:"Tengo seguro médico.",pt:"Tenho seguro de saúde.",target:"seguro"}]},
{id:"n_tramite",type:"noun",tag:"b",word:"el trámite",gloss:"trâmite / procedimento",sentences:[{es:"Es un trámite rápido.",pt:"É um procedimento rápido.",target:"trámite"}]},
{id:"n_documento",type:"noun",tag:"g",word:"el documento",gloss:"documento",sentences:[{es:"Trae tu documento de identidad.",pt:"Traz seu documento de identidade.",target:"documento"}]},
{id:"n_firma",type:"noun",tag:"r",word:"la firma",gloss:"assinatura",note:"🔴 <b>Falso amigo:</b> firma = assinatura (tb. empresa).",sentences:[{es:"Falta tu firma aquí.",pt:"Falta sua assinatura aqui.",target:"firma"}]},
{id:"n_plazo",type:"noun",tag:"a",word:"el plazo",gloss:"prazo",sentences:[{es:"El plazo termina hoy.",pt:"O prazo termina hoje.",target:"plazo"}]},
{id:"n_gasto",type:"noun",tag:"b",word:"el gasto",gloss:"gasto / despesa",sentences:[{es:"Controlo mis gastos.",pt:"Controlo meus gastos.",target:"gastos"}]},
{id:"n_ahorro",type:"noun",tag:"b",word:"el ahorro",gloss:"economia / poupança",sentences:[{es:"Tengo pocos ahorros.",pt:"Tenho pouca poupança.",target:"ahorros"}]},
{id:"n_deuda",type:"noun",tag:"b",word:"la deuda",gloss:"dívida",sentences:[{es:"No tengo deudas.",pt:"Não tenho dívidas.",target:"deudas"}]},

/* ===== TEMA 7 · TRABALHO E ESTUDO ===== */
{id:"n_trabajo",type:"noun",tag:"b",word:"el trabajo",gloss:"trabalho",sentences:[{es:"Tengo mucho trabajo.",pt:"Tenho muito trabalho.",target:"trabajo"}]},
{id:"n_empleo",type:"noun",tag:"b",word:"el empleo",gloss:"emprego",sentences:[{es:"Busco empleo.",pt:"Procuro emprego.",target:"empleo"}]},
{id:"n_jefe",type:"noun",tag:"b",word:"el jefe",gloss:"chefe",sentences:[{es:"Mi jefe es exigente.",pt:"Meu chefe é exigente.",target:"jefe"}]},
{id:"n_reunion",type:"noun",tag:"a",word:"la reunión",gloss:"reunião",sentences:[{es:"Tengo una reunión a las tres.",pt:"Tenho uma reunião às três.",target:"reunión"}]},
{id:"n_empresa",type:"noun",tag:"b",word:"la empresa",gloss:"empresa",sentences:[{es:"Trabajo en una empresa grande.",pt:"Trabalho numa empresa grande.",target:"empresa"}]},
{id:"n_horario",type:"noun",tag:"a",word:"el horario",gloss:"horário",sentences:[{es:"Mi horario es flexible.",pt:"Meu horário é flexível.",target:"horario"}]},
{id:"n_tarea",type:"noun",tag:"b",word:"la tarea",gloss:"tarefa",sentences:[{es:"Tengo muchas tareas.",pt:"Tenho muitas tarefas.",target:"tareas"}]},
{id:"n_despacho",type:"noun",tag:"b",word:"el despacho",gloss:"escritório / sala",sentences:[{es:"Está en su despacho.",pt:"Ele está na sala dele.",target:"despacho"}]},
{id:"n_carrera",type:"noun",tag:"r",word:"la carrera",gloss:"graduação / carreira",note:"🔴 carrera = curso universitário (tb. corrida).",sentences:[{es:"Estudio una carrera.",pt:"Faço uma faculdade.",target:"carrera"}]},
{id:"n_apuntes",type:"noun",tag:"b",word:"los apuntes",gloss:"anotações",sentences:[{es:"Tomo apuntes en clase.",pt:"Faço anotações na aula.",target:"apuntes"}]},
{id:"n_examen",type:"noun",tag:"a",word:"el examen",gloss:"prova / exame",sentences:[{es:"Tengo un examen mañana.",pt:"Tenho uma prova amanhã.",target:"examen"}]},
{id:"n_beca",type:"noun",tag:"b",word:"la beca",gloss:"bolsa de estudos",sentences:[{es:"Conseguí una beca.",pt:"Consegui uma bolsa.",target:"beca"}]},
{id:"n_clase",type:"noun",tag:"a",word:"la clase",gloss:"aula",sentences:[{es:"La clase empieza a las nueve.",pt:"A aula começa às nove.",target:"clase"}]},
{id:"n_titulo",type:"noun",tag:"a",word:"el título",gloss:"diploma / título",sentences:[{es:"Ya tengo el título.",pt:"Já tenho o diploma.",target:"título"}]},

/* ===== TEMA 8 · TECNOLOGIA ===== */
{id:"n_movil",type:"noun",tag:"b",word:"el móvil",gloss:"celular (Espanha)",sentences:[{es:"Mi móvil no tiene batería.",pt:"Meu celular está sem bateria.",target:"móvil"}]},
{id:"n_ordenador",type:"noun",tag:"b",word:"el ordenador",gloss:"computador (Espanha)",sentences:[{es:"Enciende el ordenador.",pt:"Liga o computador.",target:"ordenador"}]},
{id:"n_pantalla",type:"noun",tag:"b",word:"la pantalla",gloss:"tela",sentences:[{es:"La pantalla está rota.",pt:"A tela está quebrada.",target:"pantalla"}]},
{id:"n_teclado",type:"noun",tag:"g",word:"el teclado",gloss:"teclado",sentences:[{es:"Escribo en el teclado.",pt:"Escrevo no teclado.",target:"teclado"}]},
{id:"n_raton",type:"noun",tag:"b",word:"el ratón",gloss:"mouse (e o animal rato)",note:"🔵 Em ES, ratón = mouse E o animal. No Brasil dizemos «mouse».",sentences:[{es:"El ratón no funciona.",pt:"O mouse não funciona.",target:"ratón"}]},
{id:"n_contrasena",type:"noun",tag:"b",word:"la contraseña",gloss:"senha",sentences:[{es:"Olvidé la contraseña.",pt:"Esqueci a senha.",target:"contraseña"}]},
{id:"n_archivo",type:"noun",tag:"b",word:"el archivo",gloss:"arquivo",sentences:[{es:"Guarda el archivo.",pt:"Salva o arquivo.",target:"archivo"}]},
{id:"n_carpeta",type:"noun",tag:"r",word:"la carpeta",gloss:"pasta (arquivo)",note:"🔴 <b>Falso amigo:</b> carpeta = pasta. «Carpete» é <span class='es'>moqueta</span>.",sentences:[{es:"Ponlo en esta carpeta.",pt:"Põe nesta pasta.",target:"carpeta"}]},
{id:"n_enlace",type:"noun",tag:"b",word:"el enlace",gloss:"link",sentences:[{es:"Haz clic en el enlace.",pt:"Clica no link.",target:"enlace"}]},
{id:"n_red",type:"noun",tag:"b",word:"la red",gloss:"rede / wifi",sentences:[{es:"No hay red aquí.",pt:"Não tem rede aqui.",target:"red"}]},
{id:"n_cargador",type:"noun",tag:"b",word:"el cargador",gloss:"carregador",sentences:[{es:"¿Tienes un cargador?",pt:"Você tem um carregador?",target:"cargador"}]},
{id:"n_bateria",type:"noun",tag:"a",word:"la batería",gloss:"bateria",sentences:[{es:"Se acabó la batería.",pt:"Acabou a bateria.",target:"batería"}]},
{id:"n_aplicacion",type:"noun",tag:"a",word:"la aplicación",gloss:"aplicativo / app",sentences:[{es:"Descarga la aplicación.",pt:"Baixa o aplicativo.",target:"aplicación"}]},
{id:"n_usuario",type:"noun",tag:"g",word:"el usuario",gloss:"usuário",sentences:[{es:"Escribe tu usuario.",pt:"Escreve seu usuário.",target:"usuario"}]},

/* ===== TEMA 9 · FAMÍLIA E PESSOAS ===== */
{id:"n_familia",type:"noun",tag:"g",word:"la familia",gloss:"família",sentences:[{es:"Tengo una familia grande.",pt:"Tenho uma família grande.",target:"familia"}]},
{id:"n_padres",type:"noun",tag:"b",word:"los padres",gloss:"pais (pai e mãe)",sentences:[{es:"Mis padres viven en Sevilla.",pt:"Meus pais moram em Sevilha.",target:"padres"}]},
{id:"n_hijo",type:"noun",tag:"b",word:"el hijo / la hija",gloss:"filho / filha",sentences:[{es:"Tengo dos hijos.",pt:"Tenho dois filhos.",target:"hijos"}]},
{id:"n_hermano",type:"noun",tag:"b",word:"el hermano",gloss:"irmão",sentences:[{es:"Mi hermano es menor.",pt:"Meu irmão é mais novo.",target:"hermano"}]},
{id:"n_abuelo",type:"noun",tag:"b",word:"el abuelo",gloss:"avô",sentences:[{es:"Mi abuelo tiene ochenta años.",pt:"Meu avô tem oitenta anos.",target:"abuelo"}]},
{id:"n_marido",type:"noun",tag:"b",word:"el marido",gloss:"marido",sentences:[{es:"Mi marido cocina bien.",pt:"Meu marido cozinha bem.",target:"marido"}]},
{id:"n_mujer",type:"noun",tag:"b",word:"la mujer",gloss:"mulher / esposa",note:"🔵 mujer = mulher E esposa (mi mujer = minha esposa).",sentences:[{es:"Mi mujer trabaja fuera.",pt:"Minha esposa trabalha fora.",target:"mujer"}]},
{id:"n_novio",type:"noun",tag:"b",word:"el novio",gloss:"namorado (tb. noivo)",sentences:[{es:"Salgo con mi novio.",pt:"Estou namorando.",target:"novio"}]},
{id:"n_pareja",type:"noun",tag:"b",word:"la pareja",gloss:"casal / parceiro(a)",sentences:[{es:"Vivo con mi pareja.",pt:"Moro com meu parceiro.",target:"pareja"}]},
{id:"n_amigo",type:"noun",tag:"b",word:"el amigo",gloss:"amigo",sentences:[{es:"Es mi mejor amigo.",pt:"É meu melhor amigo.",target:"amigo"}]},
{id:"n_vecino",type:"noun",tag:"b",word:"el vecino",gloss:"vizinho",sentences:[{es:"Mi vecino es simpático.",pt:"Meu vizinho é simpático.",target:"vecino"}]},
{id:"n_gente",type:"noun",tag:"b",word:"la gente",gloss:"gente / pessoas",sentences:[{es:"Hay mucha gente aquí.",pt:"Tem muita gente aqui.",target:"gente"}]},
{id:"n_nino",type:"noun",tag:"b",word:"el niño",gloss:"criança / menino",sentences:[{es:"Los niños juegan fuera.",pt:"As crianças brincam lá fora.",target:"niños"}]},
{id:"n_chica",type:"noun",tag:"b",word:"la chica / el chico",gloss:"moça / rapaz",sentences:[{es:"Esa chica es mi prima.",pt:"Aquela moça é minha prima.",target:"chica"}]},
{id:"n_apellido",type:"noun",tag:"r",word:"el apellido",gloss:"sobrenome",note:"🔴 <b>Falso amigo:</b> apellido = sobrenome. «Apelido» (PT-BR) é <span class='es'>apodo</span>.",sentences:[{es:"¿Cuál es tu apellido?",pt:"Qual é o seu sobrenome?",target:"apellido"}]},

/* ===== TEMA 10 · TEMPO, CLIMA E NATUREZA ===== */
{id:"n_tiempo",type:"noun",tag:"a",word:"el tiempo",gloss:"tempo / clima",note:"Como no PT, tiempo = tempo E clima. <span class='es'>¿Qué tiempo hace?</span> = como está o tempo?",sentences:[{es:"¿Qué tiempo hace hoy?",pt:"Como está o tempo hoje?",target:"tiempo"}]},
{id:"n_sol",type:"noun",tag:"b",word:"el sol",gloss:"sol",sentences:[{es:"Hoy hace sol.",pt:"Hoje está ensolarado.",target:"sol"}]},
{id:"n_lluvia",type:"noun",tag:"b",word:"la lluvia",gloss:"chuva",sentences:[{es:"Coge el paraguas, hay lluvia.",pt:"Pega o guarda-chuva, está chovendo.",target:"lluvia"}]},
{id:"n_viento",type:"noun",tag:"b",word:"el viento",gloss:"vento",sentences:[{es:"Hace mucho viento.",pt:"Está ventando muito.",target:"viento"}]},
{id:"n_nieve",type:"noun",tag:"b",word:"la nieve",gloss:"neve",sentences:[{es:"En invierno hay nieve.",pt:"No inverno tem neve.",target:"nieve"}]},
{id:"n_calor",type:"noun",tag:"b",word:"el calor",gloss:"calor",sentences:[{es:"Hace mucho calor.",pt:"Está muito calor.",target:"calor"}]},
{id:"n_frio",type:"noun",tag:"a",word:"el frío",gloss:"frio",sentences:[{es:"Tengo frío.",pt:"Estou com frio.",target:"frío"}]},
{id:"n_nube",type:"noun",tag:"b",word:"la nube",gloss:"nuvem",sentences:[{es:"El cielo tiene muchas nubes.",pt:"O céu está cheio de nuvens.",target:"nubes"}]},
{id:"n_cielo",type:"noun",tag:"b",word:"el cielo",gloss:"céu",sentences:[{es:"El cielo está azul.",pt:"O céu está azul.",target:"cielo"}]},
{id:"n_playa",type:"noun",tag:"g",word:"la playa",gloss:"praia",sentences:[{es:"Vamos a la playa.",pt:"Vamos à praia.",target:"playa"}]},
{id:"n_mar",type:"noun",tag:"g",word:"el mar",gloss:"mar",sentences:[{es:"El mar está frío.",pt:"O mar está frio.",target:"mar"}]},
{id:"n_montana",type:"noun",tag:"a",word:"la montaña",gloss:"montanha",sentences:[{es:"Subimos la montaña.",pt:"Subimos a montanha.",target:"montaña"}]},
{id:"n_arbol",type:"noun",tag:"b",word:"el árbol",gloss:"árvore",sentences:[{es:"Hay un árbol en el jardín.",pt:"Tem uma árvore no jardim.",target:"árbol"}]},
{id:"n_verano",type:"noun",tag:"b",word:"el verano",gloss:"verão",sentences:[{es:"En verano hace calor.",pt:"No verão faz calor.",target:"verano"}]},
{id:"n_otono",type:"noun",tag:"b",word:"el otoño",gloss:"outono",sentences:[{es:"Me gusta el otoño.",pt:"Gosto do outono.",target:"otoño"}]},

/* ===== TEMA 11 · EMOÇÕES E ESTADOS (com tener/dar) ===== */
{id:"n_miedo",type:"noun",tag:"b",word:"el miedo",gloss:"medo",note:"estado com <b>tener</b>: tener miedo = ter medo.",sentences:[{es:"Tengo miedo.",pt:"Tenho medo.",target:"miedo"}]},
{id:"n_sueno",type:"noun",tag:"r",word:"el sueño",gloss:"sono / sonho",note:"🔴 sueño = sono E sonho. <span class='es'>tener sueño</span> = estar com sono.",sentences:[{es:"Tengo sueño.",pt:"Estou com sono.",target:"sueño"}]},
{id:"n_prisa",type:"noun",tag:"b",word:"la prisa",gloss:"pressa",sentences:[{es:"Tengo prisa.",pt:"Estou com pressa.",target:"prisa"}]},
{id:"n_hambre",type:"noun",tag:"b",word:"el hambre",gloss:"fome",sentences:[{es:"Tengo hambre.",pt:"Estou com fome.",target:"hambre"}]},
{id:"n_sed",type:"noun",tag:"b",word:"la sed",gloss:"sede",sentences:[{es:"Tengo sed.",pt:"Estou com sede.",target:"sed"}]},
{id:"n_suerte",type:"noun",tag:"b",word:"la suerte",gloss:"sorte",sentences:[{es:"¡Qué suerte!",pt:"Que sorte!",target:"suerte"}]},
{id:"n_ganas",type:"noun",tag:"b",word:"las ganas",gloss:"vontade",note:"<span class='es'>tener ganas de</span> = estar a fim de.",sentences:[{es:"No tengo ganas.",pt:"Não estou a fim.",target:"ganas"}]},
{id:"n_verguenza",type:"noun",tag:"a",word:"la vergüenza",gloss:"vergonha",sentences:[{es:"Me da vergüenza.",pt:"Me dá vergonha.",target:"vergüenza"}]},
{id:"n_alegria",type:"noun",tag:"a",word:"la alegría",gloss:"alegria",sentences:[{es:"Siento mucha alegría.",pt:"Sinto muita alegria.",target:"alegría"}]},
{id:"n_enfado",type:"noun",tag:"b",word:"el enfado",gloss:"irritação / raiva",sentences:[{es:"Se le pasó el enfado.",pt:"A raiva dele passou.",target:"enfado"}]},
{id:"n_carino",type:"noun",tag:"b",word:"el cariño",gloss:"carinho (tb. querido/a)",sentences:[{es:"Te tengo mucho cariño.",pt:"Tenho muito carinho por você.",target:"cariño"}]},

/* ===== TEMA 12 · LAZER E VIDA SOCIAL ===== */
{id:"n_pelicula",type:"noun",tag:"b",word:"la película",gloss:"filme",sentences:[{es:"Vamos a ver una película.",pt:"Vamos ver um filme.",target:"película"}]},
{id:"n_entrada",type:"noun",tag:"a",word:"la entrada",gloss:"ingresso / entrada",sentences:[{es:"Compré las entradas.",pt:"Comprei os ingressos.",target:"entradas"}]},
{id:"n_fiesta",type:"noun",tag:"b",word:"la fiesta",gloss:"festa",sentences:[{es:"Hay una fiesta el sábado.",pt:"Tem uma festa no sábado.",target:"fiesta"}]},
{id:"n_partido",type:"noun",tag:"r",word:"el partido",gloss:"jogo / partida",note:"🔴 partido = jogo/partida (tb. partido político).",sentences:[{es:"Vemos el partido de fútbol.",pt:"A gente vê o jogo de futebol.",target:"partido"}]},
{id:"n_concierto",type:"noun",tag:"b",word:"el concierto",gloss:"show / concerto",sentences:[{es:"Fuimos a un concierto.",pt:"Fomos a um show.",target:"concierto"}]},
{id:"n_museo",type:"noun",tag:"g",word:"el museo",gloss:"museu",sentences:[{es:"Visitamos un museo.",pt:"Visitamos um museu.",target:"museo"}]},
{id:"n_viaje",type:"noun",tag:"b",word:"el viaje",gloss:"viagem",sentences:[{es:"Estoy preparando un viaje a Madrid.",pt:"Estou preparando uma viagem a Madri.",target:"viaje"}]},
{id:"n_plan",type:"noun",tag:"b",word:"el plan",gloss:"plano / programa",note:"🔵 <span class='es'>¿tienes planes?</span> = tem programa/rolê?",sentences:[{es:"¿Tienes planes hoy?",pt:"Você tem programa hoje?",target:"planes"}]},
{id:"n_ocio",type:"noun",tag:"b",word:"el ocio",gloss:"lazer / tempo livre",sentences:[{es:"Tengo poco tiempo de ocio.",pt:"Tenho pouco tempo de lazer.",target:"ocio"}]},
{id:"n_aficion",type:"noun",tag:"b",word:"la afición",gloss:"hobby",sentences:[{es:"Mi afición es leer.",pt:"Meu hobby é ler.",target:"afición"}]},
{id:"n_equipo",type:"noun",tag:"b",word:"el equipo",gloss:"time / equipe",sentences:[{es:"Mi equipo ganó.",pt:"Meu time ganhou.",target:"equipo"}]},
{id:"n_quedada",type:"noun",tag:"b",word:"la quedada",gloss:"encontro (com amigos)",sentences:[{es:"Hacemos una quedada el viernes.",pt:"A gente marca um encontro na sexta.",target:"quedada"}]},

/* ===== VERBOS-MOTOR ===== */
{id:"v_tener",type:"verb",tag:"a",word:"tener",gloss:"ter (e muito mais)",note:"Estados usam <b>tener</b>: fome, sede, frio, pressa, medo…",sentences:[
  {es:"Tengo dos hermanos.",pt:"Tenho dois irmãos.",target:"Tengo"},
  {es:"¿Tienes hambre?",pt:"Você está com fome?",target:"Tienes"},
  {es:"Tengo que irme ya.",pt:"Tenho que ir embora já.",target:"Tengo que"}]},
{id:"v_hacer",type:"verb",tag:"b",word:"hacer",gloss:"fazer / (clima) estar",note:"Clima e tempo decorrido usam <b>hacer</b>: hace calor · hace un año.",sentences:[
  {es:"¿Qué haces mañana?",pt:"O que você faz amanhã?",target:"haces"},
  {es:"Hoy hace mucho calor.",pt:"Hoje está muito calor.",target:"hace"},
  {es:"Hace un año que vivo aquí.",pt:"Faz um ano que moro aqui.",target:"Hace"}]},
{id:"v_poner",type:"verb",tag:"b",word:"poner",gloss:"pôr / colocar / ficar",note:"<span class='es'>ponerse</span> = vestir OU ficar (+estado).",sentences:[
  {es:"Pon los platos en la mesa.",pt:"Põe os pratos na mesa.",target:"Pon"},
  {es:"Ponte el abrigo.",pt:"Põe o casaco (vista).",target:"Ponte"},
  {es:"Me pongo nervioso en los exámenes.",pt:"Fico nervoso nas provas.",target:"pongo"}]},
{id:"v_llevar",type:"verb",tag:"k",word:"llevar",gloss:"levar / usar / estar há",note:"⚡ Além de «levar»: usar (roupa) e estar há (tempo).",sentences:[
  {es:"Lleva las llaves, por favor.",pt:"Leva as chaves, por favor.",target:"Lleva"},
  {es:"Hoy lleva un vestido rojo.",pt:"Hoje ela usa um vestido vermelho.",target:"lleva"},
  {es:"Llevo dos años en Madrid.",pt:"Estou há dois anos em Madri.",target:"Llevo"}]},
{id:"v_tomar",type:"verb",tag:"k",word:"tomar",gloss:"tomar / pegar / beber",note:"⚡ serve pra beber E pra pegar transporte.",sentences:[
  {es:"Vamos a tomar algo.",pt:"Vamos beber alguma coisa.",target:"tomar"},
  {es:"Toma el autobús número cinco.",pt:"Pega o ônibus número cinco.",target:"Toma"},
  {es:"Tomo café por la mañana.",pt:"Tomo café de manhã.",target:"Tomo"}]},
{id:"v_dejar",type:"verb",tag:"b",word:"dejar",gloss:"deixar / parar de / emprestar",note:"<span class='es'>dejar de + inf.</span> = parar de.",sentences:[
  {es:"Deja las llaves en la mesa.",pt:"Deixa as chaves na mesa.",target:"Deja"},
  {es:"Quiero dejar de fumar.",pt:"Quero parar de fumar.",target:"dejar de"},
  {es:"¿Me dejas tu boli?",pt:"Você me empresta sua caneta?",target:"dejas"}]},
{id:"v_coger",type:"verb",tag:"b",word:"coger",gloss:"pegar (Espanha)",note:"Na Espanha = pegar (ônibus, coisa). ⚠ Vulgar em muitos países da América.",sentences:[
  {es:"Cojo el metro cada día.",pt:"Pego o metrô todo dia.",target:"Cojo"},
  {es:"Coge un vaso de agua.",pt:"Pega um copo de água.",target:"Coge"}]},
{id:"v_quedar",type:"verb",tag:"k",word:"quedar",gloss:"combinar · ficar · sobrar · localizar",note:"⚡ <b>Verbo-canivete.</b> Um verbo, 5 usos. Aprenda um por um:",sentences:[
  {es:"¿Quedamos mañana?",pt:"Combinamos (de nos ver) amanhã?",target:"Quedamos",use:"combinar encontro"},
  {es:"Ese vestido te queda bien.",pt:"Esse vestido fica bem em você.",target:"queda",use:"cair/ficar (roupa)"},
  {es:"Me quedo en casa hoy.",pt:"Fico em casa hoje.",target:"quedo",use:"quedarse = permanecer"},
  {es:"Solo queda un poco de pan.",pt:"Só sobra um pouco de pão.",target:"queda",use:"restar/sobrar"},
  {es:"¿Dónde queda el baño?",pt:"Onde fica o banheiro?",target:"queda",use:"localização"}]},
{id:"v_echar",type:"verb",tag:"k",word:"echar",gloss:"pôr · sentir falta · dar uma mão · expulsar",note:"⚡ <b>Verbo-canivete.</b> Vive em expressões. Os usos mais comuns:",sentences:[
  {es:"Echa sal a la sopa.",pt:"Põe sal na sopa.",target:"Echa",use:"pôr/adicionar"},
  {es:"Te echo de menos.",pt:"Sinto sua falta.",target:"echo de menos",use:"echar de menos = sentir falta"},
  {es:"¿Me echas una mano?",pt:"Me dá uma mãozinha?",target:"echas una mano",use:"echar una mano = ajudar"},
  {es:"Voy a echar un vistazo.",pt:"Vou dar uma olhada.",target:"echar un vistazo",use:"echar un vistazo = olhar"},
  {es:"Lo echaron del trabajo.",pt:"Ele foi mandado embora do trabalho.",target:"echaron",use:"expulsar/demitir"}]},

/* ===== CHUNKS (soar nativo) ===== */
{id:"c_quetal",type:"chunk",tag:"b",word:"¿qué tal?",gloss:"e aí? / tudo bem?",sentences:[{es:"Hola, ¿qué tal?",pt:"Oi, tudo bem?",target:"qué tal"}]},
{id:"c_vale",type:"chunk",tag:"b",word:"vale",gloss:"ok / combinado (Espanha)",sentences:[{es:"Nos vemos a las ocho, ¿vale?",pt:"A gente se vê às oito, ok?",target:"vale"}]},
{id:"c_nopasa",type:"chunk",tag:"b",word:"no pasa nada",gloss:"não tem problema",sentences:[{es:"Tranquila, no pasa nada.",pt:"Fica tranquila, não tem problema.",target:"no pasa nada"}]},
{id:"c_ganas",type:"chunk",tag:"b",word:"tener ganas de",gloss:"estar a fim de",sentences:[{es:"Tengo ganas de salir.",pt:"Estou a fim de sair.",target:"ganas de"}]},
{id:"c_darigual",type:"chunk",tag:"b",word:"dar igual",gloss:"tanto faz",sentences:[{es:"Me da igual.",pt:"Pra mim tanto faz.",target:"da igual"}]},
{id:"c_hayque",type:"chunk",tag:"b",word:"hay que",gloss:"é preciso / tem que",sentences:[{es:"Hay que reservar antes.",pt:"É preciso reservar antes.",target:"Hay que"}]},

/* ===== NÚCLEO · substantivos de altíssima frequência (aparecem em tudo) ===== */
{id:"n_cosa",type:"noun",tag:"b",word:"la cosa",gloss:"coisa",sentences:[{es:"¿Qué es esa cosa?",pt:"O que é essa coisa?",target:"cosa"}]},
{id:"n_vida",type:"noun",tag:"g",word:"la vida",gloss:"vida",sentences:[{es:"Así es la vida.",pt:"É a vida.",target:"vida"}]},
{id:"n_dia",type:"noun",tag:"g",word:"el día",gloss:"dia",sentences:[{es:"Trabajo todos los días.",pt:"Trabalho todos os dias.",target:"días"}]},
{id:"n_ano",type:"noun",tag:"b",word:"el año",gloss:"ano",sentences:[{es:"Tengo treinta años.",pt:"Tenho trinta anos.",target:"años"}]},
{id:"n_hora",type:"noun",tag:"g",word:"la hora",gloss:"hora",sentences:[{es:"¿Qué hora es?",pt:"Que horas são?",target:"hora"}]},
{id:"n_noche",type:"noun",tag:"b",word:"la noche",gloss:"noite",sentences:[{es:"Esta noche salgo.",pt:"Hoje à noite eu saio.",target:"noche"}]},
{id:"n_semana",type:"noun",tag:"g",word:"la semana",gloss:"semana",sentences:[{es:"La semana que viene.",pt:"A semana que vem.",target:"semana"}]},
{id:"n_mes",type:"noun",tag:"b",word:"el mes",gloss:"mês",sentences:[{es:"El mes pasado.",pt:"O mês passado.",target:"mes"}]},
{id:"n_momento",type:"noun",tag:"g",word:"el momento",gloss:"momento",sentences:[{es:"Un momento, por favor.",pt:"Um momento, por favor.",target:"momento"}]},
{id:"n_vez",type:"noun",tag:"b",word:"la vez",gloss:"vez",sentences:[{es:"Otra vez, por favor.",pt:"De novo, por favor.",target:"vez"}]},
{id:"n_nombre",type:"noun",tag:"b",word:"el nombre",gloss:"nome",sentences:[{es:"¿Cuál es tu nombre?",pt:"Qual é o seu nome?",target:"nombre"}]},
{id:"n_mundo",type:"noun",tag:"g",word:"el mundo",gloss:"mundo",sentences:[{es:"Todo el mundo lo sabe.",pt:"Todo mundo sabe.",target:"mundo"}]},
{id:"n_pais",type:"noun",tag:"b",word:"el país",gloss:"país",sentences:[{es:"Es de otro país.",pt:"É de outro país.",target:"país"}]},
{id:"n_ciudad",type:"noun",tag:"b",word:"la ciudad",gloss:"cidade",sentences:[{es:"Vivo en una ciudad grande.",pt:"Moro numa cidade grande.",target:"ciudad"}]},
{id:"n_lugar",type:"noun",tag:"b",word:"el lugar",gloss:"lugar",sentences:[{es:"Es un buen lugar.",pt:"É um bom lugar.",target:"lugar"}]},
{id:"n_numero",type:"noun",tag:"g",word:"el número",gloss:"número",sentences:[{es:"¿Me das tu número?",pt:"Me dá seu número?",target:"número"}]},
{id:"n_persona",type:"noun",tag:"g",word:"la persona",gloss:"pessoa",sentences:[{es:"Es una buena persona.",pt:"É uma boa pessoa.",target:"persona"}]},
{id:"n_hombre",type:"noun",tag:"b",word:"el hombre",gloss:"homem",sentences:[{es:"Ese hombre es mi jefe.",pt:"Aquele homem é meu chefe.",target:"hombre"}]},

/* ===== TEMA 1+ · transporte que faltava ===== */
{id:"n_tren",type:"noun",tag:"b",word:"el tren",gloss:"trem",sentences:[{es:"Cojo el tren a Madrid.",pt:"Pego o trem pra Madri.",target:"tren"}]},
{id:"n_estacion",type:"noun",tag:"a",word:"la estación",gloss:"estação",sentences:[{es:"Te espero en la estación.",pt:"Te espero na estação.",target:"estación"}]},
{id:"n_aeropuerto",type:"noun",tag:"b",word:"el aeropuerto",gloss:"aeroporto",sentences:[{es:"Voy al aeropuerto en taxi.",pt:"Vou ao aeroporto de táxi.",target:"aeropuerto"}]},
{id:"n_taxi",type:"noun",tag:"g",word:"el taxi",gloss:"táxi",sentences:[{es:"Cogemos un taxi.",pt:"Pegamos um táxi.",target:"taxi"}]},
{id:"n_mercado",type:"noun",tag:"a",word:"el mercado",gloss:"mercado / feira",sentences:[{es:"Compro fruta en el mercado.",pt:"Compro fruta na feira.",target:"mercado"}]},
{id:"n_super",type:"noun",tag:"a",word:"el supermercado",gloss:"supermercado",sentences:[{es:"Voy al supermercado.",pt:"Vou ao supermercado.",target:"supermercado"}]},
{id:"n_centro",type:"noun",tag:"g",word:"el centro",gloss:"centro",sentences:[{es:"Vivo en el centro.",pt:"Moro no centro.",target:"centro"}]},
{id:"n_pueblo",type:"noun",tag:"b",word:"el pueblo",gloss:"vila / cidade pequena / povo",sentences:[{es:"Mi familia es de un pueblo.",pt:"Minha família é de uma cidadezinha.",target:"pueblo"}]},

/* ===== TEMA 2+ · casa ===== */
{id:"n_luz",type:"noun",tag:"b",word:"la luz",gloss:"luz / energia",sentences:[{es:"No hay luz en casa.",pt:"Não tem luz em casa.",target:"luz"}]},
{id:"n_ascensor",type:"noun",tag:"b",word:"el ascensor",gloss:"elevador",sentences:[{es:"El ascensor no funciona.",pt:"O elevador não funciona.",target:"ascensor"}]},
{id:"n_ducha",type:"noun",tag:"b",word:"la ducha",gloss:"chuveiro / banho",sentences:[{es:"Me doy una ducha rápida.",pt:"Tomo um banho rápido.",target:"ducha"}]},
{id:"n_lavadora",type:"noun",tag:"b",word:"la lavadora",gloss:"máquina de lavar",sentences:[{es:"Pongo la lavadora.",pt:"Ponho a máquina de lavar.",target:"lavadora"}]},

/* ===== TEMA 3+ · comida (Espanha) ===== */
{id:"n_menu",type:"noun",tag:"g",word:"el menú",gloss:"menu do dia (menú del día)",sentences:[{es:"El menú del día son doce euros.",pt:"O menu do dia são doze euros.",target:"menú"}]},
{id:"n_tapas",type:"noun",tag:"b",word:"las tapas",gloss:"tapas (petiscos)",sentences:[{es:"Vamos de tapas.",pt:"Vamos comer tapas.",target:"tapas"}]},
{id:"n_bocadillo",type:"noun",tag:"b",word:"el bocadillo",gloss:"sanduíche (no pão)",sentences:[{es:"Un bocadillo de jamón.",pt:"Um sanduíche de presunto.",target:"bocadillo"}]},
{id:"n_fruta",type:"noun",tag:"a",word:"la fruta",gloss:"fruta",sentences:[{es:"Como fruta de postre.",pt:"Como fruta de sobremesa.",target:"fruta"}]},
{id:"n_queso",type:"noun",tag:"b",word:"el queso",gloss:"queijo",sentences:[{es:"Un poco de queso, por favor.",pt:"Um pouco de queijo, por favor.",target:"queso"}]},
{id:"n_aceite",type:"noun",tag:"b",word:"el aceite",gloss:"óleo / azeite",sentences:[{es:"Cocino con aceite de oliva.",pt:"Cozinho com azeite de oliva.",target:"aceite"}]},
{id:"n_sal",type:"noun",tag:"g",word:"la sal",gloss:"sal",sentences:[{es:"Le falta sal.",pt:"Falta sal.",target:"sal"}]},
{id:"n_postre",type:"noun",tag:"b",word:"el postre",gloss:"sobremesa",sentences:[{es:"¿Qué hay de postre?",pt:"O que tem de sobremesa?",target:"postre"}]},
{id:"n_jamon",type:"noun",tag:"b",word:"el jamón",gloss:"presunto (cru)",note:"🔵 jamón = presunto. «Presunto» em ES = suposto/presumido.",sentences:[{es:"Un bocadillo de jamón.",pt:"Um sanduíche de presunto.",target:"jamón"}]},

/* ===== TEMA 4+ · roupa ===== */
{id:"n_chaqueta",type:"noun",tag:"b",word:"la chaqueta",gloss:"jaqueta / casaco",sentences:[{es:"Llevo una chaqueta.",pt:"Estou de jaqueta.",target:"chaqueta"}]},
{id:"n_jersey",type:"noun",tag:"b",word:"el jersey",gloss:"suéter / blusa de frio",sentences:[{es:"Hace frío, ponte el jersey.",pt:"Está frio, põe o suéter.",target:"jersey"}]},
{id:"n_calcetines",type:"noun",tag:"b",word:"los calcetines",gloss:"meias",sentences:[{es:"Necesito calcetines limpios.",pt:"Preciso de meias limpas.",target:"calcetines"}]},

/* ===== TEMA 5+ · corpo/saúde ===== */
{id:"n_brazo",type:"noun",tag:"a",word:"el brazo",gloss:"braço",sentences:[{es:"Me duele el brazo.",pt:"Meu braço dói.",target:"brazo"}]},
{id:"n_boca",type:"noun",tag:"b",word:"la boca",gloss:"boca",sentences:[{es:"Abre la boca.",pt:"Abre a boca.",target:"boca"}]},
{id:"n_nariz",type:"noun",tag:"b",word:"la nariz",gloss:"nariz",sentences:[{es:"Me sangra la nariz.",pt:"Meu nariz está sangrando.",target:"nariz"}]},
{id:"n_estomago",type:"noun",tag:"b",word:"el estómago",gloss:"estômago / barriga",sentences:[{es:"Me duele el estómago.",pt:"Minha barriga dói.",target:"estómago"}]},
{id:"n_hospital",type:"noun",tag:"g",word:"el hospital",gloss:"hospital",sentences:[{es:"Está en el hospital.",pt:"Ele está no hospital.",target:"hospital"}]},
{id:"n_receta",type:"noun",tag:"b",word:"la receta",gloss:"receita (médica e de cozinha)",note:"🔵 receta médica = prescrição; tb. receita de cozinha.",sentences:[{es:"Necesito la receta del médico.",pt:"Preciso da receita do médico.",target:"receta"}]},

/* ===== TEMA 6+ · dinheiro ===== */
{id:"n_contrato",type:"noun",tag:"g",word:"el contrato",gloss:"contrato",sentences:[{es:"Firmé el contrato de alquiler.",pt:"Assinei o contrato de aluguel.",target:"contrato"}]},

/* ===== TEMA 7+ · trabalho/estudo ===== */
{id:"n_profesor",type:"noun",tag:"b",word:"el profesor / la profesora",gloss:"professor(a)",sentences:[{es:"Mi profesora es muy maja.",pt:"Minha professora é muito gente boa.",target:"profesora"}]},
{id:"n_companero",type:"noun",tag:"b",word:"el compañero",gloss:"colega",sentences:[{es:"Es mi compañero de trabajo.",pt:"É meu colega de trabalho.",target:"compañero"}]},
{id:"n_curso",type:"noun",tag:"a",word:"el curso",gloss:"curso",sentences:[{es:"Hago un curso de español.",pt:"Faço um curso de espanhol.",target:"curso"}]},
{id:"n_proyecto",type:"noun",tag:"g",word:"el proyecto",gloss:"projeto",sentences:[{es:"Trabajo en un proyecto nuevo.",pt:"Trabalho num projeto novo.",target:"proyecto"}]},

/* ===== TEMA 8+ · tecnologia ===== */
{id:"n_mensaje",type:"noun",tag:"b",word:"el mensaje",gloss:"mensagem",sentences:[{es:"Te mando un mensaje.",pt:"Te mando uma mensagem.",target:"mensaje"}]},
{id:"n_correo",type:"noun",tag:"b",word:"el correo",gloss:"e-mail (correo electrónico)",sentences:[{es:"Te escribo un correo.",pt:"Te escrevo um e-mail.",target:"correo"}]},
{id:"n_foto",type:"noun",tag:"g",word:"la foto",gloss:"foto",sentences:[{es:"¿Me haces una foto?",pt:"Você tira uma foto minha?",target:"foto"}]},

/* ===== TEMA 9+ · pessoas ===== */
{id:"n_tio",type:"noun",tag:"r",word:"el tío / la tía",gloss:"tio/tia (e 'cara/mano' na Espanha)",note:"🔴 tío = tio, mas na fala espanhola vira «cara/mano»: <span class='es'>¡Qué pasa, tío!</span>",sentences:[{es:"Mi tío vive en Madrid.",pt:"Meu tio mora em Madri.",target:"tío"}]},
{id:"n_primo",type:"noun",tag:"b",word:"el primo / la prima",gloss:"primo / prima",sentences:[{es:"Ese chico es mi primo.",pt:"Aquele rapaz é meu primo.",target:"primo"}]},

/* ===== TEMA 10+ · estações ===== */
{id:"n_invierno",type:"noun",tag:"b",word:"el invierno",gloss:"inverno",sentences:[{es:"En invierno hace mucho frío.",pt:"No inverno faz muito frio.",target:"invierno"}]},
{id:"n_primavera",type:"noun",tag:"a",word:"la primavera",gloss:"primavera",sentences:[{es:"Me gusta la primavera.",pt:"Gosto da primavera.",target:"primavera"}]},

/* ===== TEMA 12+ · lazer ===== */
{id:"n_bar",type:"noun",tag:"g",word:"el bar",gloss:"bar",sentences:[{es:"Quedamos en el bar de siempre.",pt:"A gente se encontra no bar de sempre.",target:"bar"}]},
{id:"n_restaurante",type:"noun",tag:"g",word:"el restaurante",gloss:"restaurante",sentences:[{es:"Cenamos en un restaurante.",pt:"Jantamos num restaurante.",target:"restaurante"}]},
{id:"n_musica",type:"noun",tag:"g",word:"la música",gloss:"música",sentences:[{es:"Me gusta esta música.",pt:"Gosto desta música.",target:"música"}]},
{id:"n_libro",type:"noun",tag:"b",word:"el libro",gloss:"livro",sentences:[{es:"Estoy leyendo un libro.",pt:"Estou lendo um livro.",target:"libro"}]},

/* ===== FALSOS AMIGOS que faltavam + antídotos ===== */
{id:"a_exquisito",type:"noun",tag:"r",word:"exquisito/a",gloss:"delicioso / requintado (adj.)",note:"🔴 <b>Falso amigo:</b> exquisito = delicioso. «Esquisito/estranho» é <span class='es'>raro</span>.",sentences:[{es:"La comida está exquisita.",pt:"A comida está deliciosa.",target:"exquisita"}]},
{id:"n_salsa",type:"noun",tag:"r",word:"la salsa",gloss:"molho",note:"🔴 <b>Falso amigo:</b> salsa = molho. «Salsinha» é <span class='es'>perejil</span>.",sentences:[{es:"Pasta con salsa de tomate.",pt:"Macarrão com molho de tomate.",target:"salsa"}]},
{id:"n_polvo",type:"noun",tag:"r",word:"el polvo",gloss:"pó / poeira",note:"🔴 <b>Falso amigo:</b> polvo = pó. O animal polvo é <span class='es'>pulpo</span>.",sentences:[{es:"Hay polvo en los muebles.",pt:"Tem poeira nos móveis.",target:"polvo"}]},
{id:"n_pulpo",type:"noun",tag:"b",word:"el pulpo",gloss:"polvo (animal)",sentences:[{es:"Comí pulpo en Galicia.",pt:"Comi polvo na Galícia.",target:"pulpo"}]},
{id:"n_escritorio",type:"noun",tag:"r",word:"el escritorio",gloss:"escrivaninha",note:"🔴 <b>Falso amigo:</b> escritorio = escrivaninha. «Escritório» é <span class='es'>oficina/despacho</span>.",sentences:[{es:"El ordenador está en el escritorio.",pt:"O computador está na escrivaninha.",target:"escritorio"}]},
{id:"n_aula",type:"noun",tag:"r",word:"el aula",gloss:"sala de aula",note:"🔴 <b>Falso amigo:</b> aula = sala de aula. «Aula/lição» é <span class='es'>clase</span>.",sentences:[{es:"El aula está en el segundo piso.",pt:"A sala de aula fica no segundo andar.",target:"aula"}]},
{id:"a_largo",type:"noun",tag:"r",word:"largo/a",gloss:"comprido / longo (adj.)",note:"🔴 <b>Falso amigo:</b> largo = comprido. «Largo (de largura)» é <span class='es'>ancho</span>.",sentences:[{es:"El pasillo es muy largo.",pt:"O corredor é muito comprido.",target:"largo"}]},
{id:"a_ancho",type:"noun",tag:"b",word:"ancho/a",gloss:"largo, de largura (adj.)",sentences:[{es:"La calle es muy ancha.",pt:"A rua é muito larga.",target:"ancha"}]},
{id:"n_rato",type:"noun",tag:"r",word:"el rato",gloss:"momento / tempinho",note:"🔴 <b>Falso amigo:</b> rato = momento. O animal rato é <span class='es'>ratón</span>.",sentences:[{es:"Espera un rato.",pt:"Espera um pouquinho.",target:"rato"}]},
{id:"n_taller",type:"noun",tag:"b",word:"el taller",gloss:"oficina (mecânica) / ateliê",sentences:[{es:"Llevé el coche al taller.",pt:"Levei o carro na oficina.",target:"taller"}]},
{id:"n_cachorro",type:"noun",tag:"r",word:"el cachorro",gloss:"filhote",note:"🔴 <b>Falso amigo:</b> cachorro = filhote. «Cachorro (cão)» é <span class='es'>perro</span>.",sentences:[{es:"La perra tuvo cachorros.",pt:"A cadela teve filhotes.",target:"cachorros"}]},
{id:"n_perro",type:"noun",tag:"b",word:"el perro",gloss:"cachorro / cão",sentences:[{es:"Tengo un perro pequeño.",pt:"Tenho um cachorro pequeno.",target:"perro"}]},

/* ===== VERBOS + advérbio (falsos amigos) ===== */
{id:"v_quitar",type:"verb",tag:"r",word:"quitar",gloss:"tirar / remover",note:"🔴 <b>Falso amigo:</b> quitar = tirar/remover. «Quitar» (PT, pagar dívida) é <span class='es'>saldar</span>.",sentences:[
  {es:"Quita los platos de la mesa.",pt:"Tira os pratos da mesa.",target:"Quita"},
  {es:"Quítate el abrigo.",pt:"Tira o casaco.",target:"Quítate"}]},
{id:"v_acordarse",type:"verb",tag:"r",word:"acordarse (de)",gloss:"lembrar-se",note:"🔴 acordarse = lembrar-se. «Acordar (do sono)» é <span class='es'>despertarse</span>.",sentences:[
  {es:"¿Te acuerdas de mí?",pt:"Você se lembra de mim?",target:"acuerdas"},
  {es:"No me acuerdo de su nombre.",pt:"Não me lembro do nome dele.",target:"acuerdo"}]},
{id:"adv_todavia",type:"chunk",tag:"r",word:"todavía",gloss:"ainda",note:"🔴 <b>Falso amigo:</b> todavía = ainda. «Todavia/porém» é <span class='es'>sin embargo</span>.",sentences:[{es:"Todavía no he comido.",pt:"Ainda não comi.",target:"Todavía"}]},

/* ===== VERBOS-MOTOR (expansão) ===== */
{id:"v_ser",type:"verb",tag:"a",word:"ser",gloss:"ser (identidade/característica)",note:"ser = permanente (quem/o quê); estar = estado/lugar.",sentences:[
  {es:"Soy de Brasil.",pt:"Sou do Brasil.",target:"Soy"},
  {es:"Es muy simpático.",pt:"Ele é muito simpático.",target:"Es"},
  {es:"Somos cuatro en casa.",pt:"Somos quatro em casa.",target:"Somos"}]},
{id:"v_estar",type:"verb",tag:"a",word:"estar",gloss:"estar (estado/lugar)",note:"estar = estado ou localização.",sentences:[
  {es:"Estoy cansada.",pt:"Estou cansada.",target:"Estoy"},
  {es:"¿Dónde estás?",pt:"Onde você está?",target:"estás"},
  {es:"Está en casa.",pt:"Ele está em casa.",target:"Está"}]},
{id:"v_ir",type:"verb",tag:"g",word:"ir",gloss:"ir (+ futuro)",note:"<span class='es'>ir a + inf.</span> = futuro (voy a comer = vou comer).",sentences:[
  {es:"Voy al trabajo.",pt:"Vou ao trabalho.",target:"Voy"},
  {es:"¿Vas a venir?",pt:"Você vai vir?",target:"Vas"},
  {es:"Vamos a comer.",pt:"Vamos comer.",target:"Vamos"}]},
{id:"v_dar",type:"verb",tag:"g",word:"dar",gloss:"dar (+ expressões)",note:"<span class='es'>dar igual</span> = tanto faz; <span class='es'>darse cuenta</span> = perceber.",sentences:[
  {es:"Dame la mano.",pt:"Me dá a mão.",target:"Dame"},
  {es:"Me da igual.",pt:"Pra mim tanto faz.",target:"da igual"},
  {es:"Me di cuenta tarde.",pt:"Percebi tarde.",target:"di cuenta"}]},
{id:"v_ver",type:"verb",tag:"g",word:"ver",gloss:"ver",sentences:[
  {es:"¿Ves la tele?",pt:"Você vê TV?",target:"Ves"},
  {es:"Nos vemos mañana.",pt:"A gente se vê amanhã.",target:"vemos"}]},
{id:"v_saber",type:"verb",tag:"a",word:"saber",gloss:"saber (fato/habilidade)",note:"🔵 saber = saber fato/fazer algo; conhecer pessoa/lugar = <span class='es'>conocer</span>.",sentences:[
  {es:"No sé nada.",pt:"Não sei nada.",target:"sé"},
  {es:"¿Sabes cocinar?",pt:"Você sabe cozinhar?",target:"Sabes"}]},
{id:"v_conocer",type:"verb",tag:"b",word:"conocer",gloss:"conhecer (pessoa/lugar)",note:"🔵 conocer pessoa/lugar; saber fato = <span class='es'>saber</span>.",sentences:[
  {es:"¿Conoces Madrid?",pt:"Você conhece Madri?",target:"Conoces"},
  {es:"La conocí ayer.",pt:"Eu a conheci ontem.",target:"conocí"}]},
{id:"v_querer",type:"verb",tag:"b",word:"querer",gloss:"querer / amar",note:"🔵 querer = querer E amar (te quiero = eu te amo).",sentences:[
  {es:"Quiero un café.",pt:"Quero um café.",target:"Quiero"},
  {es:"Te quiero mucho.",pt:"Eu te amo muito.",target:"quiero"}]},
{id:"v_decir",type:"verb",tag:"b",word:"decir",gloss:"dizer / falar",sentences:[
  {es:"¿Qué dices?",pt:"O que você diz?",target:"dices"},
  {es:"Dime la verdad.",pt:"Me diz a verdade.",target:"Dime"}]},
{id:"v_poder",type:"verb",tag:"a",word:"poder",gloss:"poder",sentences:[
  {es:"¿Puedes ayudarme?",pt:"Você pode me ajudar?",target:"Puedes"},
  {es:"No puedo ahora.",pt:"Não posso agora.",target:"puedo"}]},
{id:"v_deber",type:"verb",tag:"b",word:"deber",gloss:"dever (obrigação)",note:"<span class='es'>deber + inf.</span> = ter obrigação de.",sentences:[
  {es:"Debes descansar.",pt:"Você deve descansar.",target:"Debes"},
  {es:"Debo irme.",pt:"Devo ir embora.",target:"Debo"}]},
{id:"v_gustar",type:"verb",tag:"k",word:"gustar",gloss:"gostar (estrutura invertida!)",note:"⚡ <b>Estrutura invertida:</b> <span class='es'>me gusta</span> = eu gosto (lit. 'me agrada').",sentences:[
  {es:"Me gusta el café.",pt:"Eu gosto de café.",target:"gusta"},
  {es:"¿Te gusta bailar?",pt:"Você gosta de dançar?",target:"gusta"},
  {es:"No me gustan.",pt:"Eu não gosto deles.",target:"gustan"}]},
{id:"v_encantar",type:"verb",tag:"b",word:"encantar",gloss:"adorar (estrutura invertida)",note:"🔵 me encanta = eu adoro (mais forte que gustar).",sentences:[
  {es:"Me encanta viajar.",pt:"Eu adoro viajar.",target:"encanta"}]},
{id:"v_salir",type:"verb",tag:"b",word:"salir",gloss:"sair / salir con = namorar",note:"🔵 <span class='es'>salir con alguien</span> = sair com / namorar.",sentences:[
  {es:"Salgo del trabajo a las seis.",pt:"Saio do trabalho às seis.",target:"Salgo"},
  {es:"¿Salimos esta noche?",pt:"A gente sai hoje à noite?",target:"Salimos"}]},
{id:"v_venir",type:"verb",tag:"b",word:"venir",gloss:"vir",sentences:[
  {es:"¿Vienes conmigo?",pt:"Você vem comigo?",target:"Vienes"},
  {es:"Vengo enseguida.",pt:"Já venho.",target:"Vengo"}]},
{id:"v_pensar",type:"verb",tag:"g",word:"pensar",gloss:"pensar / achar / pretender",note:"<span class='es'>pensar + inf.</span> = pretender (pienso ir = pretendo ir).",sentences:[
  {es:"¿Qué piensas?",pt:"O que você acha?",target:"piensas"},
  {es:"Pienso ir mañana.",pt:"Pretendo ir amanhã.",target:"Pienso"}]},
{id:"v_volver",type:"verb",tag:"k",word:"volver",gloss:"voltar / volver a = de novo",note:"⚡ <span class='es'>volver a + inf.</span> = fazer de novo.",sentences:[
  {es:"Vuelvo a las ocho.",pt:"Volto às oito.",target:"Vuelvo"},
  {es:"Vuelve a intentarlo.",pt:"Tenta de novo.",target:"Vuelve a"}]},
{id:"v_pasar",type:"verb",tag:"k",word:"pasar",gloss:"passar / acontecer / entrar",note:"⚡ <b>Canivete:</b> passar, acontecer (¿qué pasa?) e entrar (pasa, por favor).",sentences:[
  {es:"¿Qué pasa?",pt:"O que houve? / E aí?",target:"pasa",use:"acontecer"},
  {es:"Pasa, por favor.",pt:"Entra, por favor.",target:"Pasa",use:"entrar"},
  {es:"El tiempo pasa rápido.",pt:"O tempo passa rápido.",target:"pasa",use:"passar"}]},
{id:"v_llamar",type:"verb",tag:"b",word:"llamar",gloss:"chamar / ligar / chamar-se",note:"🔵 llamar = ligar (telefone); <span class='es'>llamarse</span> = chamar-se.",sentences:[
  {es:"Te llamo luego.",pt:"Te ligo depois.",target:"llamo"},
  {es:"Me llamo Ana.",pt:"Me chamo Ana.",target:"llamo"}]},
{id:"v_buscar",type:"verb",tag:"b",word:"buscar",gloss:"procurar / buscar",sentences:[
  {es:"Busco trabajo.",pt:"Procuro trabalho.",target:"Busco"},
  {es:"Te busco a las cinco.",pt:"Te busco às cinco.",target:"busco"}]},
{id:"v_empezar",type:"verb",tag:"b",word:"empezar",gloss:"começar",note:"<span class='es'>empezar a + inf.</span> = começar a.",sentences:[
  {es:"La clase empieza ya.",pt:"A aula começa já.",target:"empieza"},
  {es:"Empiezo a entender.",pt:"Começo a entender.",target:"Empiezo"}]},
{id:"v_esperar",type:"verb",tag:"a",word:"esperar",gloss:"esperar / aguardar / torcer",note:"🟡 esperar = aguardar E ter esperança.",sentences:[
  {es:"Espera un momento.",pt:"Espera um momento.",target:"Espera"},
  {es:"Espero que sí.",pt:"Espero que sim.",target:"Espero"}]},
{id:"v_perder",type:"verb",tag:"g",word:"perder",gloss:"perder / perder-se",sentences:[
  {es:"Siempre pierdo las llaves.",pt:"Sempre perco as chaves.",target:"pierdo"},
  {es:"Me he perdido.",pt:"Eu me perdi.",target:"perdido"}]},
{id:"v_entender",type:"verb",tag:"b",word:"entender",gloss:"entender",sentences:[
  {es:"No entiendo nada.",pt:"Não entendo nada.",target:"entiendo"},
  {es:"¿Me entiendes?",pt:"Você me entende?",target:"entiendes"}]},
{id:"v_pedir",type:"verb",tag:"b",word:"pedir",gloss:"pedir (solicitar)",note:"🔵 pedir = solicitar; fazer pergunta = <span class='es'>preguntar</span>.",sentences:[
  {es:"Voy a pedir la cuenta.",pt:"Vou pedir a conta.",target:"pedir"},
  {es:"Pídele ayuda.",pt:"Pede ajuda a ele.",target:"Pídele"}]},
{id:"v_preguntar",type:"verb",tag:"b",word:"preguntar",gloss:"perguntar",note:"🔵 preguntar = fazer pergunta; solicitar algo = <span class='es'>pedir</span>.",sentences:[
  {es:"Te pregunto una cosa.",pt:"Te pergunto uma coisa.",target:"pregunto"}]},
{id:"v_ayudar",type:"verb",tag:"b",word:"ayudar",gloss:"ajudar",sentences:[
  {es:"¿Me ayudas?",pt:"Você me ajuda?",target:"ayudas"},
  {es:"Te ayudo con eso.",pt:"Te ajudo com isso.",target:"ayudo"}]},
{id:"v_pagar",type:"verb",tag:"g",word:"pagar",gloss:"pagar",sentences:[
  {es:"Pago yo.",pt:"Eu pago.",target:"Pago"},
  {es:"¿Pagas con tarjeta?",pt:"Você paga no cartão?",target:"Pagas"}]},

/* ===== ADJETIVOS ===== */
{id:"aj_grande",type:"adjetivo",tag:"g",word:"grande",gloss:"grande",sentences:[{es:"Es una casa grande.",pt:"É uma casa grande.",target:"grande"}]},
{id:"aj_pequeno",type:"adjetivo",tag:"g",word:"pequeño/a",gloss:"pequeno",sentences:[{es:"Es un piso pequeño.",pt:"É um apartamento pequeno.",target:"pequeño"}]},
{id:"aj_bueno",type:"adjetivo",tag:"a",word:"bueno/a",gloss:"bom",sentences:[{es:"La comida es buena.",pt:"A comida é boa.",target:"buena"}]},
{id:"aj_malo",type:"adjetivo",tag:"b",word:"malo/a",gloss:"mau / ruim",sentences:[{es:"Es una mala idea.",pt:"É uma má ideia.",target:"mala"}]},
{id:"aj_mejor",type:"adjetivo",tag:"b",word:"mejor",gloss:"melhor",sentences:[{es:"Es mejor así.",pt:"É melhor assim.",target:"mejor"}]},
{id:"aj_peor",type:"adjetivo",tag:"b",word:"peor",gloss:"pior",sentences:[{es:"Hoy es peor que ayer.",pt:"Hoje está pior que ontem.",target:"peor"}]},
{id:"aj_nuevo",type:"adjetivo",tag:"b",word:"nuevo/a",gloss:"novo",sentences:[{es:"Tengo un coche nuevo.",pt:"Tenho um carro novo.",target:"nuevo"}]},
{id:"aj_viejo",type:"adjetivo",tag:"b",word:"viejo/a",gloss:"velho",sentences:[{es:"Es un edificio viejo.",pt:"É um prédio velho.",target:"viejo"}]},
{id:"aj_joven",type:"adjetivo",tag:"b",word:"joven",gloss:"jovem",sentences:[{es:"Es muy joven.",pt:"Ele é muito jovem.",target:"joven"}]},
{id:"aj_mayor",type:"adjetivo",tag:"b",word:"mayor",gloss:"mais velho / maior",note:"🔵 mayor = mais velho (pessoa) e maior.",sentences:[{es:"Mi hermano es mayor.",pt:"Meu irmão é mais velho.",target:"mayor"}]},
{id:"aj_alto",type:"adjetivo",tag:"g",word:"alto/a",gloss:"alto",sentences:[{es:"Es muy alto.",pt:"Ele é muito alto.",target:"alto"}]},
{id:"aj_bajo",type:"adjetivo",tag:"b",word:"bajo/a",gloss:"baixo",sentences:[{es:"Es bajo y delgado.",pt:"Ele é baixo e magro.",target:"bajo"}]},
{id:"aj_guapo",type:"adjetivo",tag:"b",word:"guapo/a",gloss:"bonito (pessoa)",sentences:[{es:"Es muy guapo.",pt:"Ele é muito bonito.",target:"guapo"}]},
{id:"aj_feo",type:"adjetivo",tag:"b",word:"feo/a",gloss:"feio",sentences:[{es:"Es un poco feo.",pt:"É um pouco feio.",target:"feo"}]},
{id:"aj_bonito",type:"adjetivo",tag:"g",word:"bonito/a",gloss:"bonito",sentences:[{es:"Qué vestido tan bonito.",pt:"Que vestido bonito.",target:"bonito"}]},
{id:"aj_gordo",type:"adjetivo",tag:"g",word:"gordo/a",gloss:"gordo",sentences:[{es:"Es un gato gordo.",pt:"É um gato gordo.",target:"gordo"}]},
{id:"aj_delgado",type:"adjetivo",tag:"a",word:"delgado/a",gloss:"magro",sentences:[{es:"Está muy delgada.",pt:"Ela está muito magra.",target:"delgada"}]},
{id:"aj_fuerte",type:"adjetivo",tag:"b",word:"fuerte",gloss:"forte",sentences:[{es:"Es muy fuerte.",pt:"Ele é muito forte.",target:"fuerte"}]},
{id:"aj_caliente",type:"adjetivo",tag:"b",word:"caliente",gloss:"quente",sentences:[{es:"El café está caliente.",pt:"O café está quente.",target:"caliente"}]},
{id:"aj_limpio",type:"adjetivo",tag:"b",word:"limpio/a",gloss:"limpo",sentences:[{es:"El baño está limpio.",pt:"O banheiro está limpo.",target:"limpio"}]},
{id:"aj_sucio",type:"adjetivo",tag:"b",word:"sucio/a",gloss:"sujo",sentences:[{es:"El suelo está sucio.",pt:"O chão está sujo.",target:"sucio"}]},
{id:"aj_lleno",type:"adjetivo",tag:"b",word:"lleno/a",gloss:"cheio",sentences:[{es:"El vaso está lleno.",pt:"O copo está cheio.",target:"lleno"}]},
{id:"aj_vacio",type:"adjetivo",tag:"b",word:"vacío/a",gloss:"vazio",sentences:[{es:"La nevera está vacía.",pt:"A geladeira está vazia.",target:"vacía"}]},
{id:"aj_roto",type:"adjetivo",tag:"b",word:"roto/a",gloss:"quebrado / rasgado",sentences:[{es:"El móvil está roto.",pt:"O celular está quebrado.",target:"roto"}]},
{id:"aj_oscuro",type:"adjetivo",tag:"b",word:"oscuro/a",gloss:"escuro",sentences:[{es:"La habitación está oscura.",pt:"O quarto está escuro.",target:"oscura"}]},
{id:"aj_caro",type:"adjetivo",tag:"g",word:"caro/a",gloss:"caro",sentences:[{es:"Es bonito pero caro.",pt:"É bonito mas caro.",target:"caro"}]},
{id:"aj_barato",type:"adjetivo",tag:"g",word:"barato/a",gloss:"barato",sentences:[{es:"Este es más barato.",pt:"Este é mais barato.",target:"barato"}]},
{id:"aj_rapido",type:"adjetivo",tag:"g",word:"rápido/a",gloss:"rápido",sentences:[{es:"Es un tren rápido.",pt:"É um trem rápido.",target:"rápido"}]},
{id:"aj_lento",type:"adjetivo",tag:"g",word:"lento/a",gloss:"lento",sentences:[{es:"El wifi es muy lento.",pt:"O wifi é muito lento.",target:"lento"}]},
{id:"aj_facil",type:"adjetivo",tag:"g",word:"fácil",gloss:"fácil",sentences:[{es:"Es muy fácil.",pt:"É muito fácil.",target:"fácil"}]},
{id:"aj_dificil",type:"adjetivo",tag:"g",word:"difícil",gloss:"difícil",sentences:[{es:"Es un poco difícil.",pt:"É um pouco difícil.",target:"difícil"}]},
{id:"aj_importante",type:"adjetivo",tag:"g",word:"importante",gloss:"importante",sentences:[{es:"Es muy importante.",pt:"É muito importante.",target:"importante"}]},
{id:"aj_listo",type:"adjetivo",tag:"r",word:"listo/a",gloss:"pronto / esperto",note:"🔴 <b>Falso amigo:</b> <span class='es'>estar listo</span> = estar pronto; <span class='es'>ser listo</span> = ser esperto.",sentences:[{es:"Ya estoy listo.",pt:"Já estou pronto.",target:"listo"}]},
{id:"aj_majo",type:"adjetivo",tag:"b",word:"majo/a",gloss:"legal / gente boa (Espanha)",sentences:[{es:"Tu vecino es muy majo.",pt:"Seu vizinho é muito gente boa.",target:"majo"}]},
{id:"aj_cansado",type:"adjetivo",tag:"g",word:"cansado/a",gloss:"cansado",sentences:[{es:"Estoy muy cansado.",pt:"Estou muito cansado.",target:"cansado"}]},
{id:"aj_contento",type:"adjetivo",tag:"a",word:"contento/a",gloss:"contente / feliz",sentences:[{es:"Estoy muy contento.",pt:"Estou muito contente.",target:"contento"}]},
{id:"aj_tranquilo",type:"adjetivo",tag:"g",word:"tranquilo/a",gloss:"tranquilo",sentences:[{es:"Estate tranquila.",pt:"Fica tranquila.",target:"tranquila"}]},
{id:"aj_ocupado",type:"adjetivo",tag:"g",word:"ocupado/a",gloss:"ocupado",sentences:[{es:"Hoy estoy ocupado.",pt:"Hoje estou ocupado.",target:"ocupado"}]},
{id:"aj_libre",type:"adjetivo",tag:"a",word:"libre",gloss:"livre",sentences:[{es:"¿Estás libre hoy?",pt:"Você está livre hoje?",target:"libre"}]},
{id:"aj_enfermo",type:"adjetivo",tag:"b",word:"enfermo/a",gloss:"doente",sentences:[{es:"Estoy enfermo.",pt:"Estou doente.",target:"enfermo"}]},
{id:"aj_sano",type:"adjetivo",tag:"b",word:"sano/a",gloss:"saudável",sentences:[{es:"Es una comida sana.",pt:"É uma comida saudável.",target:"sana"}]},
{id:"aj_raro",type:"adjetivo",tag:"a",word:"raro/a",gloss:"estranho / raro",sentences:[{es:"Qué raro.",pt:"Que estranho.",target:"raro"}]},

/* ===== ADVÉRBIOS ===== */
{id:"av_muy",type:"adverbio",tag:"b",word:"muy",gloss:"muito (antes de adj.)",sentences:[{es:"Es muy fácil.",pt:"É muito fácil.",target:"muy"}]},
{id:"av_mas",type:"adverbio",tag:"a",word:"más",gloss:"mais",sentences:[{es:"Quiero más, por favor.",pt:"Quero mais, por favor.",target:"más"}]},
{id:"av_tambien",type:"adverbio",tag:"a",word:"también",gloss:"também",sentences:[{es:"Yo también voy.",pt:"Eu também vou.",target:"también"}]},
{id:"av_tampoco",type:"adverbio",tag:"b",word:"tampoco",gloss:"tampouco / também não",sentences:[{es:"Yo tampoco lo sé.",pt:"Eu também não sei.",target:"tampoco"}]},
{id:"av_casi",type:"adverbio",tag:"a",word:"casi",gloss:"quase",sentences:[{es:"Casi llego tarde.",pt:"Quase cheguei atrasado.",target:"Casi"}]},
{id:"av_ya",type:"adverbio",tag:"b",word:"ya",gloss:"já",sentences:[{es:"Ya está listo.",pt:"Já está pronto.",target:"Ya"}]},
{id:"av_siempre",type:"adverbio",tag:"a",word:"siempre",gloss:"sempre",sentences:[{es:"Siempre llego pronto.",pt:"Sempre chego cedo.",target:"Siempre"}]},
{id:"av_nunca",type:"adverbio",tag:"g",word:"nunca",gloss:"nunca",sentences:[{es:"Nunca he estado allí.",pt:"Nunca estive lá.",target:"Nunca"}]},
{id:"av_ahora",type:"adverbio",tag:"a",word:"ahora",gloss:"agora",sentences:[{es:"Lo hago ahora.",pt:"Faço agora.",target:"ahora"}]},
{id:"av_luego",type:"adverbio",tag:"b",word:"luego",gloss:"depois / logo",sentences:[{es:"Hasta luego.",pt:"Até mais.",target:"luego"}]},
{id:"av_despues",type:"adverbio",tag:"b",word:"después",gloss:"depois",sentences:[{es:"Después hablamos.",pt:"Depois a gente fala.",target:"Después"}]},
{id:"av_antes",type:"adverbio",tag:"g",word:"antes",gloss:"antes",sentences:[{es:"Llega antes de las ocho.",pt:"Chega antes das oito.",target:"antes"}]},
{id:"av_aqui",type:"adverbio",tag:"a",word:"aquí",gloss:"aqui",sentences:[{es:"Ven aquí.",pt:"Vem aqui.",target:"aquí"}]},
{id:"av_alli",type:"adverbio",tag:"b",word:"allí",gloss:"ali / lá",sentences:[{es:"Está allí.",pt:"Está ali.",target:"allí"}]},
{id:"av_cerca",type:"adverbio",tag:"b",word:"cerca",gloss:"perto",sentences:[{es:"Vivo muy cerca.",pt:"Moro bem perto.",target:"cerca"}]},
{id:"av_lejos",type:"adverbio",tag:"b",word:"lejos",gloss:"longe",sentences:[{es:"Queda muy lejos.",pt:"Fica muito longe.",target:"lejos"}]},
{id:"av_bien",type:"adverbio",tag:"a",word:"bien",gloss:"bem",sentences:[{es:"Estoy bien, gracias.",pt:"Estou bem, obrigada.",target:"bien"}]},
{id:"av_mal",type:"adverbio",tag:"g",word:"mal",gloss:"mal",sentences:[{es:"Me siento mal.",pt:"Me sinto mal.",target:"mal"}]},
{id:"av_demasiado",type:"adverbio",tag:"b",word:"demasiado",gloss:"demais",sentences:[{es:"Es demasiado caro.",pt:"É caro demais.",target:"demasiado"}]},
{id:"av_bastante",type:"adverbio",tag:"g",word:"bastante",gloss:"bastante / bem",sentences:[{es:"Es bastante bueno.",pt:"É bem bom.",target:"bastante"}]},
{id:"av_pronto",type:"adverbio",tag:"r",word:"pronto",gloss:"logo / cedo",note:"🔴 <b>Falso amigo:</b> pronto = logo/cedo. «Pronto (listo)» é <span class='es'>listo</span>.",sentences:[{es:"Vuelvo pronto.",pt:"Volto logo.",target:"pronto"}]},
{id:"av_despacio",type:"adverbio",tag:"b",word:"despacio",gloss:"devagar",sentences:[{es:"Habla más despacio.",pt:"Fala mais devagar.",target:"despacio"}]},
{id:"av_quizas",type:"adverbio",tag:"b",word:"quizás / tal vez",gloss:"talvez",sentences:[{es:"Quizás mañana.",pt:"Talvez amanhã.",target:"Quizás"}]},
{id:"av_tan",type:"adverbio",tag:"b",word:"tan",gloss:"tão",sentences:[{es:"No es tan difícil.",pt:"Não é tão difícil.",target:"tan"}]},
{id:"av_asi",type:"adverbio",tag:"b",word:"así",gloss:"assim",sentences:[{es:"No se hace así.",pt:"Não se faz assim.",target:"así"}]},
{id:"av_apenas",type:"adverbio",tag:"r",word:"apenas",gloss:"mal / quase não",note:"🔴 <b>Falso amigo:</b> apenas = mal/quase não. «Apenas (só)» é <span class='es'>solo</span>.",sentences:[{es:"Apenas lo conozco.",pt:"Mal o conheço.",target:"Apenas"}]},
{id:"av_incluso",type:"adverbio",tag:"b",word:"incluso",gloss:"inclusive / até",sentences:[{es:"Incluso llovió.",pt:"Até choveu.",target:"Incluso"}]},
{id:"av_temprano",type:"adverbio",tag:"b",word:"temprano",gloss:"cedo",sentences:[{es:"Me levanto temprano.",pt:"Levanto cedo.",target:"temprano"}]},
{id:"av_tarde",type:"adverbio",tag:"g",word:"tarde",gloss:"tarde",sentences:[{es:"Llegué tarde.",pt:"Cheguei tarde.",target:"tarde"}]},

/* ===== CONECTORES (o pulo pro B2) ===== */
{id:"co_pero",type:"conector",tag:"b",word:"pero",gloss:"mas",sentences:[{es:"Es caro, pero bueno.",pt:"É caro, mas bom.",target:"pero"}]},
{id:"co_porque",type:"conector",tag:"g",word:"porque",gloss:"porque",sentences:[{es:"No voy porque llueve.",pt:"Não vou porque está chovendo.",target:"porque"}]},
{id:"co_aunque",type:"conector",tag:"b",word:"aunque",gloss:"embora / mesmo que",sentences:[{es:"Voy aunque llueva.",pt:"Vou mesmo que chova.",target:"aunque"}]},
{id:"co_mientras",type:"conector",tag:"b",word:"mientras",gloss:"enquanto",sentences:[{es:"Cocino mientras hablo.",pt:"Cozinho enquanto falo.",target:"mientras"}]},
{id:"co_sinembargo",type:"conector",tag:"b",word:"sin embargo",gloss:"no entanto / porém",sentences:[{es:"Es caro; sin embargo, lo compro.",pt:"É caro; no entanto, compro.",target:"sin embargo"}]},
{id:"co_poreso",type:"conector",tag:"b",word:"por eso",gloss:"por isso",sentences:[{es:"Llueve, por eso no salgo.",pt:"Está chovendo, por isso não saio.",target:"por eso"}]},
{id:"co_asique",type:"conector",tag:"b",word:"así que",gloss:"então / portanto",sentences:[{es:"Es tarde, así que me voy.",pt:"É tarde, então vou embora.",target:"así que"}]},
{id:"co_osea",type:"conector",tag:"b",word:"o sea",gloss:"ou seja",sentences:[{es:"Mañana, o sea el lunes.",pt:"Amanhã, ou seja, segunda.",target:"o sea"}]},
{id:"co_dehecho",type:"conector",tag:"b",word:"de hecho",gloss:"na verdade / aliás",sentences:[{es:"De hecho, no lo sabía.",pt:"Na verdade, eu não sabia.",target:"De hecho"}]},
{id:"co_enrealidad",type:"conector",tag:"b",word:"en realidad",gloss:"na realidade",sentences:[{es:"En realidad, no me gusta.",pt:"Na realidade, não gosto.",target:"En realidad"}]},
{id:"co_ademas",type:"conector",tag:"b",word:"además",gloss:"além disso",sentences:[{es:"Además, es barato.",pt:"Além disso, é barato.",target:"Además"}]},
{id:"co_sobretodo",type:"conector",tag:"b",word:"sobre todo",gloss:"sobretudo / principalmente",sentences:[{es:"Me gusta, sobre todo el café.",pt:"Gosto, principalmente do café.",target:"sobre todo"}]},
{id:"co_entonces",type:"conector",tag:"b",word:"entonces",gloss:"então",sentences:[{es:"¿Y entonces qué hacemos?",pt:"E então, o que a gente faz?",target:"entonces"}]},
{id:"co_detodosmodos",type:"conector",tag:"b",word:"de todos modos",gloss:"de qualquer forma",sentences:[{es:"De todos modos, gracias.",pt:"De qualquer forma, obrigada.",target:"De todos modos"}]},

/* ===== FALSOS AMIGOS verbo/adj/conector que faltavam (validação web) ===== */
{id:"v_contestar",type:"verb",tag:"r",word:"contestar",gloss:"responder",note:"🔴 <b>Falso amigo:</b> contestar = responder. «Contestar/objetar» é <span class='es'>rebatir</span>.",sentences:[{es:"No me contestó el mensaje.",pt:"Não respondeu minha mensagem.",target:"contestó"}]},
{id:"v_asistir",type:"verb",tag:"r",word:"asistir (a)",gloss:"comparecer / frequentar",note:"🔴 <b>Falso amigo:</b> asistir a = comparecer/ir a. «Assistir (ver)» é <span class='es'>ver</span>.",sentences:[{es:"Asisto a clase todos los días.",pt:"Vou à aula todos os dias.",target:"Asisto"}]},
{id:"v_borrar",type:"verb",tag:"r",word:"borrar",gloss:"apagar / deletar",note:"🔴 <b>Falso amigo:</b> borrar = apagar/deletar. Nada a ver com «borrão».",sentences:[{es:"Borré el mensaje sin querer.",pt:"Apaguei a mensagem sem querer.",target:"Borré"}]},
{id:"v_brincar",type:"verb",tag:"r",word:"brincar / saltar",gloss:"pular / saltar",note:"🔴 <b>Falso amigo:</b> em ES brincar = pular. «Brincar» (PT, de criança) é <span class='es'>jugar</span>.",sentences:[{es:"El niño brinca de alegría.",pt:"O menino pula de alegria.",target:"brinca"}]},
{id:"aj_rojo",type:"adjetivo",tag:"r",word:"rojo/a",gloss:"vermelho",note:"🔴 <b>Falso amigo:</b> rojo = vermelho. «Roxo» é <span class='es'>morado</span>.",sentences:[{es:"Un coche rojo.",pt:"Um carro vermelho.",target:"rojo"}]},
{id:"aj_flaco",type:"adjetivo",tag:"r",word:"flaco/a",gloss:"magro",note:"🔴 <b>Falso amigo:</b> flaco = magro. «Fraco» é <span class='es'>débil</span>.",sentences:[{es:"Está muy flaco.",pt:"Ele está muito magro.",target:"flaco"}]},
{id:"aj_enfadado",type:"adjetivo",tag:"r",word:"enfadado/a",gloss:"bravo / chateado (Espanha)",note:"🔴 Na Espanha, enfadado = bravo/chateado. «Enojado» (PT: com nojo) tem outro sentido.",sentences:[{es:"Está enfadado conmigo.",pt:"Ele está bravo comigo.",target:"enfadado"}]},
{id:"co_sino",type:"conector",tag:"r",word:"sino",gloss:"mas (sim) / senão",note:"🔴 <b>Falso amigo:</b> sino = mas sim (no es rojo, sino verde). «Sino/campainha» é <span class='es'>campana</span>.",sentences:[{es:"No es azul, sino verde.",pt:"Não é azul, mas sim verde.",target:"sino"}]},
{id:"av_aun",type:"adverbio",tag:"b",word:"aún",gloss:"ainda (= todavía)",note:"🔵 aún = ainda (igual a todavía). Sem acento, «aun» = até/mesmo.",sentences:[{es:"Aún no ha llegado.",pt:"Ainda não chegou.",target:"Aún"}]}

];
if(typeof window!=="undefined") window.CONTENT = CONTENT;
