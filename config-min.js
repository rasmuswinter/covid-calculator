var costingTool={apiKey:"notarealkey",sheetId:"1pbI-J81J9Y-zWWwb5WsJzm9xNFMf1MQkW9WfvKWnOvo",form:{id:"1IKPzkHOaUSghvXPoqnEtKRiU-7itfKVEctiOXFEc8DM",emailField:"entry.2021578057",nameField:"entry.137289990",roleField:"entry.498093414",laField:"entry.1440918690"},buttons:{next:"Next section",prev:"Previous section",submit:"Submit",change:"Change assumptions",download:"&#10515; Download as pdf"},errorMessages:{req:"Required",reqNum:"Required (enter 0 if not applicable)",email:"Please enter a valid email address",posNum:"Please enter a non-negative number",percent:"Please enter a number between 0 and 100",percentTotal:"Figures must add up to 100"},sections:[{title:"You and Your Local Authority Area",desc:["This section captures key information about your Local Authority (LA) and the Broad Market Rental Area (BRMA) you want to analyse.","For move-on purposes we ask you to identify both a primary and secondary option for each, to analyse for in-borough and out-of-borough placements."],groups:[{label:"",inputs:[{name:"email",label:"Your Email Address",type:"email"},{name:"name",label:"Your Name",type:"text"},{name:"role",label:"Your Role",type:"text"}]},{label:"",inputs:[{name:"la",label:"Your Local Authority",type:"select",source:["Rents","Local Authority"],placeholder:"Select your Local Authority"},{name:"la2",label:"Secondary LA, for out-of-borough placements",type:"select",source:["Rents","Local Authority"],placeholder:"Select your Local Authority"},{name:"brma",label:"Primary Broad Rental Market Area (BRMA)",type:"select",source:["LHAs","BRMA"],placeholder:"Select your BRMA"},{name:"brma2",label:"Secondary BRMA, for out-of-borough placements",type:"select",source:["LHAs","BRMA"],placeholder:"Select your BRMA"}]}]},{title:"People in Temporary Accommodation, COVID-19 Response (new)",desc:["This section captures data about the number of individuals that are currently housed in temporary accommodation (TA) as a response to COVID-19.","It asks for the overall number, but also for a further segmentation by percentage of people with different support needs and NRPF status.","If you don't have this information we suggest Low (50%), Medium (35%), High (15%) and NRPF (20%)."],groups:[{label:"Number of people in TA, during COVID-19",inputs:[{name:"ta_new_hotels",label:"Hotels"},{name:"ta_new_bnb",label:"Bed & Breakfast"},{name:"ta_new_hostels",label:"Hostels"},{name:"ta_new_others",label:"Others"}]},{label:"Support Needs",validation:"percent",inputs:[{name:"ta_new_low",label:"Low",type:"percent",default:50},{name:"ta_new_med",label:"Medium",type:"percent",default:35},{name:"ta_new_high",label:"High",type:"percent",default:15}]},{label:"",inputs:[{name:"ta_new_nprf",label:"No Recourse to Public Funds (NRPF's)",type:"percent",default:20}]}]},{title:"People in Temporary Accommodation, before COVID-19 (existing)",desc:["This section captures data about the number of individuals that are currently housed in temporary accommodation (TA).","Please input the number for each type of accommodation.","It asks for the overall number, but also for a further segmentation by percentage of people with different support needs and NRPF status.","If you don't have this information we suggest Low (60%), Medium (30%) and High (10%)."],groups:[{label:"Single households",inputs:[{name:"ta_old_bnb",label:"Bed & Breakfast"},{name:"ta_old_hostels",label:"Hostels"},{name:"ta_old_nightly_paid_shared",label:"Nightly paid accommodation (shared)"},{name:"ta_old_prs_shared",label:"Private Rental Sector (PRS) Leased (shared)"},{name:"ta_old_nightly_paid_self_contained",label:"Nightly paid accommodation (self-contained)"},{name:"ta_old_prs_self_contained",label:"PRS Leased (self-contained)"},{name:"ta_old_others",label:"Others"}]},{label:"Support Needs",validation:"percent",inputs:[{name:"ta_old_low",label:"Low",type:"percent",default:60},{name:"ta_old_med",label:"Medium",type:"percent",default:30},{name:"ta_old_high",label:"High",type:"percent",default:10}]}]},{title:"Cost of accommodation (per week)",desc:["This section captures the cost GROSS COST of accommodation per week where you are currently housing individuals"],groups:[{label:"Costs",inputs:[{name:"cost_hotels",label:"Hotels",type:"pounds"},{name:"cost_bnb",label:"Bed & Breakfast",type:"pounds"},{name:"cost_hostels",label:"Hostels",type:"pounds"},{name:"cost_nightly_paid_shared",label:"Nightly paid accommodation (shared)",type:"pounds"},{name:"cost_prs_shared",label:"Private Rental Sector (PRS) Leased (shared)",type:"pounds"},{name:"cost_nightly_paid_self_contained",label:"Nightly paid accommodation (self-contained)",type:"pounds"},{name:"cost_prs_self_contained",label:"PRS Leased (self-contained)",type:"pounds"},{name:"cost_others",label:"Others: (please specify)",type:"pounds"}]}]},{title:"Assumptions",desc:["The section captures assumptions regarding variable costs associated with the housing process.","We have used standard assumptions for these, but if the user has better assumptions, then they can include them here."],groups:[{label:"",inputs:[{name:"asm_mgmt",label:"Management costs, per week",type:"pounds",default:20},{name:"asm_move_in_supp",label:"Move-in support and incentives for Landlords, per week",type:"pounds",default:50},{name:"asm_med_supp",label:"Medium support needs, costs per week",type:"pounds",default:20},{name:"asm_high_supp",label:"High support needs, costs per week",type:"pounds",default:80},{name:"asm_out_of_borough",label:"% of Out-of-Borough placements",type:"percent",default:20}]}]}],report:{title:"Cost Modelling Report",sections:[{tables:["1. Geography","2. Housing Stock","3. Assumptions","4. Number of people in Emergency Accommodation, segmented by support need","5. Number of people in Existing TA, segmented by support need"],headers:[null,[["","P25","P30","P35"]],[["","From LA"]],[["","Number of people in COVID-19 Emergency Accommodation","Total cost per month"]],[["","Number of single people in shared TA"]]],rowLabels:[["Primary LA","Secondary LA","Primary BRMA","Secondary BRMA"],["Estimated number of available dwellings","Ratio People in Emergency Accommodation to be allocated / Estimated Dwellings available","Difficulty to procure that number of units?"],["Management costs","Move-in support and incentives for Landlords","Medium support needs, costs","High support needs, costs","% of out-of-borough placements"],null,null]},{title:"Moving people in COVID emergency accommodation to the PRS",firstHeaders:["Total cost per month, <b>NOT INCLUSIVE</b> of management, move-in and support needs","Cost in COVID-19 Emergency Accommodation"],otherHeaders:["Total cost per month, <b>INCLUSIVE</b> of management, move-in and support needs","Difference Emergency Accommodation - PRS, per month","Potential Savings, per year"],tables:["Potential Savings per year for move from Emergency Accommodation to Permanent PRS, in-borough","Potential Savings per year for move from Emergency Accommodation to Permanent PRS, considering out-of-borough"]},{title:"Moving people from temporary accommodation to the PRS",firstHeaders:null,otherHeaders:["Total cost per month, <b>INCLUSIVE</b> of management, move-in and support needs","Total cost per year"],tables:["Potential Savings per year for move from existing TA to Permanent PRS, in-borough","Potential Savings per year for move TA to PRS as permanent, out-borough"]}]}};