import Form from "./components/Form";
import Topic from "./components/Topic";
import useForm from "./hook/useForm";

export default function App() {
    const { file, setFile, readFile, talks } = useForm();
    return (
        <main>
            <Form file={file} setFile={setFile} readFile={readFile} />
            <Topic talks={talks} />
        </main>
    );
}
