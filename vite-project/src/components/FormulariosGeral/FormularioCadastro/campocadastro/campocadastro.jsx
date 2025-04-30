const CampoCadastro = ({ label, type, name, value }) => {
    return (
      <div className="mb-4">
        <label className="block text-lime-800 text-sm font-medium">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          className="w-full p-2 border border-stone-600 rounded-md focus:outline-none focus:ring-3 focus:ring-lime-800 focus:border-lime-800"
        />
      </div>
    );
  };
  
  export { CampoCadastro };