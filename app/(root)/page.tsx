import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import { SignedIn, UserButton } from "@clerk/nextjs"
import DocumentIcon from "../../public/assets/icons/doc.svg"
import Image from "next/image"

const Home = () => {

  /* Line 36 */
  
  const documents = [];

  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification list
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {documents.length > 0 ? (
        <div>

        </div>
      ) : (
        <div className="document-list-empty">
          <Image
            src={DocumentIcon}
            alt="Document"
            width={40}
            height={40}
            className="mx-auto"
          />
          {/* <AddDocumentBtn /> 1 HR Mark here */}
        </div>
      )}
    </main>
  )
}

export default Home