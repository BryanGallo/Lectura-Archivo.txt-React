import Form from "./components/Form";
import useForm from "./hook/useForm";

export default function App() {
    const { file, setFile } = useForm();
    return (
        <main>
            <Form file={file} setFile={setFile} />
        </main>
    );
}
