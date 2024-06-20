import Form from "./components/Form";
import Topics from "./components/Topics";
import useForm from "./hook/useForm";

export default function App() {
    const { file, setFile, readFile, talks } = useForm();
    return (
        <main>
            <Form file={file} setFile={setFile} readFile={readFile} />
            <Topics talks={talks} />
        </main>
    );
}
