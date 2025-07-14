import './App.css'
import ScrollPageSection from './components/ScrollPageSection'
import VerticalSideBanner from './components/VerticalSideBanner'

function App() {

  return (
    <main>
      <VerticalSideBanner side="left" />
      <VerticalSideBanner side="right" />

      <div className="flex justify-center items-center m-10">
        <img src="/boba machine man.png" style={{ height: '20rem' }} />
      </div>
      <div className='mt-20' />

      <h1 className="sticky top-8">BOBAMABOB</h1>
      <ScrollPageSection className='flex flex-col items-center justify-center'>
        <h3 className="mt-8 max-w-[80%]">
          A boba milk tea used to be $2.50. Now we pay up to $8. What happened?
        </h3>
      </ScrollPageSection>
      <ScrollPageSection>
        <div className="flex flex-col items-center my-32">
          <span className="text-3xl font-bold animate-bounce mb-4">↓</span>
          <p className="text-xl text-gray-600">scroll down, it's one of those kinds of websites</p>
        </div>
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          It's going to be as <b>small</b> as a vending machine, and <b>cheap</b> enough that it can be placed everywhere.
        </h3>
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center my-16">
        <img src="/all-markets.png" style={{ width: '75%' }} />
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          Originally from Taiwan, boba milk tea has grown to become popular in US cities, especially
          with students and young adults. The market is at a healthy <b>7.22% CAGR</b> in the US.<sup>*</sup>
        </h3>
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center my-16">
        <img src="/tea-market.png" style={{ width: '75%' }} />
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          The ubiquity of coffee and vending machines show that there is a gap in the market for
          an <b>easily accessible, tactile, dessert tea drink</b> that doesn't require a
          sit-down cafe experience or have to front the costs of continued labor.
        </h3>
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <img src="/student-and-bobamabob.png" style={{ width: '75%' }} />
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          As you might tell by the professionalism website, the machine is obviously in
          an early <b>(pre-seed)</b> stage, and will need a few more iterations before we
          self operate it in a local mall.
        </h3>
      </ScrollPageSection>

      <div className='my-16'>video of the working prototype goes here</div>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          We are looking for <b>angels</b>, <b>self-manufacturers</b>, and <b>convenience vending experts</b> to help
          us bring this to market. Please reach out!
        </h3>
      </ScrollPageSection>

      <form action="https://api.web3forms.com/submit" method="POST">

        {/* <!-- REQUIRED: Your Access key here. Don't worry this can be public --> */}
        {/* <!-- Create your Access key here: https://web3forms.com/ --> */}
        <input type="hidden" name="apikey" value="22dba50c-496d-4ca1-a9b5-c8f8c3ece8cf" />
        <input type="hidden" name="access_key" value="22dba50c-496d-4ca1-a9b5-c8f8c3ece8cf" />

        {/* <!-- Optional: Can be type="hidden" or type="text" for subject --></input> */}
        <input type="hidden" name="subject" value="New Submission from Boba Machine" />

        {/* <!-- Required: if submitting without Javascript 
         (because by default web3form outputs json) -->

    <!-- If javascript, use "window.location.hash" for redirects -->
    <input type="hidden" name="redirect" value="https://web3forms.com/success"> */}

        {/* <!-- Optional: But Recommended: To Prevent SPAM Submission. 
         Make sure its hidden by default --> */}
        <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

        <input type="email" name="email" required />
        <input type="text" name="First Name" required />
        <input type="text" name="Phone Number" required />
        <textarea name="message" cols={30} rows={10} required></textarea>

        <button type="submit">Submit Form</button>

      </form>

      <footer className='text-grey-400 mt-80'>
        * according to Fortune Business Insights report FBI101564</footer>
    </main>
  )
}

export default App
