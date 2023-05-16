import React from "react";
import axios from "axios";

export default function Dictionary(){
    const [TermSearch, setSearchTerm] = useState('')
  const [Speech, setPartOfSpeech] = useState('')
  const [phonetics, setPhonetics] = useState('')
  const [definition, setDefinition] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSearch = async (event) => {
    event.preventDefault();

    // Searching a Definition using Merriam Webster
    const MerriamWebKey = '98a198a3-a200-490a-ad48-98ac95b46d80'
    const MerriamWebUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/${TermSearch}?key=${MerriamWebKey}`


    // Trying to get Response in Merriam Webster URL
    try {
      const response = await axios.get(MerriamWebUrl)
      const firstDefinition = response.data[0].shortdef
      const PartOfSpeech = response.data[0].fl
      const Phonetic = response.data[0].hwi.prs[0].mw
      setPartOfSpeech(PartOfSpeech)
      setPhonetics(Phonetic)
      setDefinition(firstDefinition)
    } catch (error) {
      console.log(error)
      setDefinition('No definition found.')
    }

    // Trying to Search a picture related in the term search
    const UnsplashKey = 'gVfJPtlmzZ4XoaVB4p5SdGe0ILjssdLMcDqR3FH5gn0';
    const UnsplahUrl = `https://api.unsplash.com/photos/random?query=${TermSearch}&client_id=${UnsplashKey}`;

    try {
      const response = await axios.get(UnsplahUrl);
      const imageUrl = response.data.urls.regular;
      setImageUrl(imageUrl);
    } catch (error) {
      console.log(error);
      setImageUrl('');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={TermSearch}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <h1></h1>
        <p>{phonetics && `Phonetics : ${phonetics}`}</p>
        <h2>{definition && 'Definition:'}</h2>
        <p>{definition}</p>
        <p>{Speech && `Parts of Speech : ${Speech}`}</p>
      </div>
      {imageUrl && (
        <div>
          <h2>Image:</h2>
          <img src={imageUrl} alt={TermSearch} />
        </div>
      )}
    </div>
  )
}