import React from "react";

const Form = ({ file, setFile, readFile }) => {
    const handleUpload = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Carga un archivo");
            return;
        }
        readFile(file);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className="text-emerald-600 font-black text-4xl max-sm:text-3xl text-center capitalize my-10">
                    Carga tu Topic de Conferencia
                </h2>
                <div className="mb-4">
                    <label className="block text-center text-xs sm:text-sm md:text-lg overflow-hidden">
                        <input
                            type="file"
                            accept=".txt"
                            onChange={handleUpload}
                            name="txt"
                            className="text-md text-slate-500 bg-slate-100 rounded-md p-4
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-md file:font-semibold
                                file:bg-violet-50 file:text-sky-700
                                hover:file:bg-violet-100 file:hover:cursor-pointer text-center"
                        />
                    </label>
                </div>
                <div className="flex justify-center text-center gap-3 mx-auto">
                    <input
                        type="submit"
                        className="bg-emerald-700 p-4 py-3 text-white font-bold rounded uppercase mb-3 mt-3 text-sm hover:cursor-pointer hover:bg-emerald-900 transition-colors"
                        value="Generar Topic"
                    />
                </div>
            </form>
        </>
    );
};

export default Form;
