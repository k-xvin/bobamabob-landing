import ScrollPageSection from './components/ScrollPageSection'
import VerticalSideBanner, { HorizontalSideBanner } from './components/VerticalSideBanner'

function App() {

  return (
    <main>
      <VerticalSideBanner side="left" />
      <VerticalSideBanner side="right" />
      <HorizontalSideBanner side="left" />
      <HorizontalSideBanner side="right" />

      <div className="flex justify-center items-center m-10 mt-25 sm:mt-10">
        <img
          src="/boba machine man.png"
          className="w-full max-w-[20rem] sm:h-[20rem] h-auto"
          style={{ objectFit: 'contain' }}
          alt="Boba Machine Man"
        />
      </div>
      <div className='mt-20' />

      <h1 className="sm:sticky top-8">BOBAMABOB</h1>
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
        <img src="/all-markets.png" className='sm:w-[75%] xs:w-[100%] my-8' />
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          Originally from Taiwan, boba milk tea has grown to become popular in US cities, especially
          with students and young adults. Originally an affordable desert, it has now transformed into a luxury
          barista-style drink. The bobamabob will bring it <b>back</b> to its comfort-drink roots.
        </h3>
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center my-16">
        <img src="/tea-market.png" className='sm:w-[75%] xs:w-[100%] my-8' />
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          The ubiquity of coffee and vending machines show that there is a gap in the market for
          an <b>easily accessible, tactile, dessert tea drink</b> that doesn't require a
          sit-down cafe experience or have to front the costs of continued labor.
        </h3>
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <img src="/student-and-bobamabob.png" className='sm:w-[75%] xs:w-[100%] my-8' />
      </ScrollPageSection>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          As you might tell by the website, the machine is in
          an early stage, and will need a few more iterations before we
          self operate it in a local mall.
        </h3>
      </ScrollPageSection>

      <div className='my-16'>video of the working prototype goes here</div>

      <ScrollPageSection className="flex flex-col items-center justify-center">
        <h3 className="max-w-[80%] text-center">
          We are looking for <b>self-manufacturers</b>, <b>convenience vending experts</b>, and yes-<b>angels</b>. 
          Please reach out, even if just to chat!
        </h3>
      </ScrollPageSection>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="max-w-lg mx-auto rounded-lg flex flex-col gap-4 my-16"
      >
        <input type="hidden" name="apikey" value="22dba50c-496d-4ca1-a9b5-c8f8c3ece8cf" />
        <input type="hidden" name="access_key" value="22dba50c-496d-4ca1-a9b5-c8f8c3ece8cf" />
        <input type="hidden" name="subject" value="New Submission from Boba Machine" />
        <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

        <label className="flex flex-col">
          <span className="mb-1 font-semibold text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white-500"
            placeholder="you@email.com"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-semibold text-gray-700">First Name</span>
          <input
            type="text"
            name="Name"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white-500"
            placeholder="Your name"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-semibold text-gray-700">Message</span>
          <textarea
            name="message"
            cols={30}
            rows={5}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white-500 resize-none"
            placeholder="Words!"
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-[#8FF0F0] text-[#051f37] font-bold py-2 px-4 rounded transition-transform duration-200 hover:scale-105"
        >
          Submit Form
        </button>
      </form>

      <footer className='text-grey-400 mb-18 sm:mb-0 mt-16'>
        * according to Fortune Business Insights report FBI101564 | © 2025, Bobamabob
      </footer>
    </main>
  )
}

export default App
