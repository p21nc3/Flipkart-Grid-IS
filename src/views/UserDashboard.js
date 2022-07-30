import { data } from 'autoprefixer'
import React from 'react'
import Stats from '../components/Stats'
import Register from '../components/Register'
// Change here
const userStats = [
    {
        count: 22,
        heading: "Mean"
    },
    {
        count: 23,
        heading: "Median"
    },
    {
        count: 23,
        heading: "Median"
    },
    {
        count: 24,
        heading: "Mode"
    }
]
export default function UserDashboard() {
  const [show, setShow] = React.useState(true);
  if(show){
    return(
      <Register lift={setShow} kind={"repo"}/>
    )
  }
  return (
    <div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      {
        userStats?.map((item, idx) => <Stats key={idx} count={item.count} heading={item.heading}/> )
      }
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src="/graph.jpeg" alt="stats" />
    </div>
  </div>
</section>



    </div>
  )
}
