import { PlusLg } from 'react-bootstrap-icons';
export default function NoDataCenteredParagraph({suggestCreating}) {
  return <p className="text-center m-0">No data. {suggestCreating && <>Click on <PlusLg /><b>New</b> to create one.</>}</p>
}
