<template>
  <div class="sec-inspections">
    <div class="sec-inspections-top-title">
      <h1>TYPES OF INSPECTIONS</h1>
    </div>
    <div class="width-60">
      <ul class="flex-center" v-if = "inspectionsEn != null" v-for="(inspection, index) in inspectionsEn" :index="index" :key="inspection.id">
        <li class="flex-left">
          <div class="sec-inspections-content flex-center width-100">
            <div class="sec-inspections-title flex-left width-100">
              <h3>{{inspection.title}}</h3>
              <span @click="showMore('description',index)">{{more}}</span>
            </div>
            <div class="sec-inspections-description display-none-flex description">
              <h3>{{inspection.title}}</h3>
              <div v-for="description in inspection.description" :key="description.id">
                <p>{{description.p}}</p>
              </div>
              <button >REQUEST QUOTE</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Header',
  data () {
    return {
      selected: 'en',
      inspectionsEn: [{title:"40 Years Inspection", 
                      description:[
                        {p: "The 40 Year Building Recertification of Real Estate Property is a requirement, under Section 8-11(f) of the County Code, for buildings that have been in existence for more than 40 years and every 10 years thereafter."},
                        {p: "If notification has been issued by the Building Department that your property(s) must receive a re-certification to comply with Section 8-11(f) of the Code of Miami Dade County, you must hire alicensed Florida Architect or Engineer to perform an inspection of your property and evaluate the Structural and Electrical components, as outlined in the Minimum Inspection Procedural Guidelines Forms. As a part of the Re-certification some cities require to submit a form certifying compliance with the parking illumination standards as per Chapter 8C of the Miami-Dade Code in Section 8C-3 signed and sealed by a professional engineer."},
                        {p: "If you have received a notice that a 40/50-Year Re-certification is required on a building you own or manage, please don’t hesitate to call us at (786) 473-5813 and B&amp;A Engineering Services will provide you with a very competitive price quote for the inspection and report."}]},
                     {title:"4 Point Inspection", 
                      description:[
                       {p:"Once a home reaches a certain age, many insurance carriers would like to take a peek at the four main sources of insurance claims: the roof covering, plumbing, electrical and HVAC systems. Commercial and residential 4 Point Inspections are mandatory if required by the insurer companies before any insurance policy is issued on an older home (30 years old or more)."},
                       {p: "4 Point Home Inspection must be submitted in a form to properly evaluate an application for your insurance. Four Point Inspection is for buildings older than 30 years."}]},
                     {title:"Certificate of Balcony Inspection", 
                      description:[
                       {p:"A Certificate of Balcony Inspection is a requirement from the State of Florida Department of Business and Professional Regulations (DBPR), Division of Hotels and Restaurants. The Inspector will verify, in the balcony inspection, any landing or porch that is accessible to or used by the public (platforms, stairways, railings and railways, guardrails, balustrades, parapets and areas enclosed by screening or other non-permanent building material (Section 509.2112, F.S. and Rule 61C-3.001(5)(a), F.A.C.))."}, 
                       {p:"Balcony Inspection is mandatory for public lodging establishments that are 3 or more stories in height."}]},
                     {title:"Comprehensive Inspection", 
                      description:[
                       {p:"If you are looking to buy a commercial building and your financial institution or insurance company request an inspection to determine condition of all components of the building, a Comprehensive Inspection must be performed. A Comprehensive Inspection covers every aspect of a property’s condition and can alert you of existing or potential problems."}]},
                     {title:"Full Home Inspection", 
                      description:[
                       {p:"If you are looking to buy your home, we understand how important a home inspection is to your realestate transaction so we do the absolute best to ensure you get the best inspection possible. Emotionoften affects the buyer and makes it hard to imagine any problems with their new home. A buyer needs ahome inspection to find out all the problems possible with the home before moving in. A full homeinspection covers every aspect of a property’s condition and can alert you of existing or potential problems."}]},
                     {title:"Miami-Dade Certificate of Use Inspection", 
                      description:[
                        {p:"This is an inspection required to comply with Miami-Dade Ordinance No. 08-133, which applies to all residential properties in unincorporated Miami-Dade County which are acquired through a Certificate of Title (Foreclosures and Judgments), in accordance with Chapter 45, Florida Statutes. Residential properties affected include single-family homes, condominiums, townhouses and duplexes. The ordinance requires that title holders of foreclosed properties in Miami-Dade County acquired through Certificate of Title under chapter 45, Florida Statutes F.S. (Foreclosure and Judgments) obtain a Certificate of Use (CU) prior to offering the property for sale, transfer or alienation. This inspection must be signed off by an Engineer or Architect in the State of Florida."}]},
                     {title:"Roof Condition Certification Inspection", 
                      description:[
                        {p:"The Roof Condition Certification is a requirement from the insurance companies for properties with more than 25 years. The Roof Condition Certification Inspection must be performed and report must be completed by a verifiable Florida-licensed professional. Documentation should indicate the roof estimated age, that it is in good condition and free from leaks, and has a remaining useful life of at least three years."}]},
                     {title:"Wind Mitigation", 
                      description:[
                        {p:"A thorough wind mitigation analysis and inspection is one of the few types of home inspections that helps reduce the cost of homeowner’s insurance. According to Florida Statutes, your insurance company is required to lower your rates based on features/construction of the home that reduce home damage in due to hurricane winds."},
                        {p:"The wind mitigation verifies the appropriateness of the structure construction in the event of a windstorm or tropical storm. Wind mitigation inspection is a valuable service that might reduce your insurance rates from the insurance company. Windstorm mitigation can be performed for a single family home,townhouse, condo or commercial building. B&amp;A can help you, please give us a call at (786) 473-5812 or fill out our form to schedule the inspection."},
                        {p:"Would you like to get an idea of the windstorm mitigation construction features on your home from a trained, licensed inspector? The Windstorm Consultation is a hands-on visit to help you understand what could potentially be done to enhance your preparedness and potentially lower your insurance rates."},
                         {p:"Also if you are representing a Condo Association and you are looking to obtain an exact inventory of the opening protection of each unit at condo, B&amp;A can help you, please give us a call at (786) 473-5812 or fill out our form and we would be happy to assist you."}]}],
      inspectionsSp: [{title:"", description:""},
                     {title:"", description:""},
                     {title:"", description:""},
                     {title:"", description:""},
                     {title:"", description:""},
                     {title:"", description:""},
                     {title:"", description:""},
                     {title:"", description:""}],
      more:"More...",
      mass: "Mass..."
    }
  },
  methods: {
   showMore(cl,a){
    //  alert(a);
      var ele= document.getElementsByClassName(cl)
      var index=a;
      // alert(key);
      if(ele[index].classList.contains('display-none-flex')){
        ele[index].classList.remove('display-none-flex');
        ele[index].classList.add('display-flex');
      }else if(!ele[index].classList.contains('display-none-flex')){
        ele[index].classList.remove('display-flex');
        ele[index].classList.add('display-none-flex');
      }
    }
  }
}
</script>