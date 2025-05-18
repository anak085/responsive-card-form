import { useState } from "react";

export default function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLeaked = cardNumber.endsWith("1234");
    setResult(isLeaked ? "Vazado" : "Seguro");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-2xl p-6 shadow-2xl">
        <h2 className="text-xl font-semibold mb-2 text-center">
          Verifique se seu cartão foi exposto
        </h2>
        <p className="text-sm text-gray-300 mb-6 text-center">
          Preencha os dados do cartão abaixo para verificar se ele foi vazado na internet. Nenhuma informação será salva.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Número do Cartão */}
          <div>
            <label htmlFor="card-number" className="block text-sm mb-1">Número do Cartão</label>
            <input
              id="card-number"
              type="text"
              name="fake-card-number"
              autoComplete="off"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          {/* Nome do Titular */}
          <div>
            <label htmlFor="card-holder" className="block text-sm mb-1">Nome do Titular</label>
            <input
              id="card-holder"
              type="text"
              name="fake-card-holder"
              autoComplete="off"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              placeholder="João da Silva"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
          </div>

          {/* Validade e CVC */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="expiry" className="block text-sm mb-1">Validade</label>
              <input
                id="expiry"
                type="text"
                name="fake-expiry"
                autoComplete="off"
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                placeholder="MM/AA"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvc" className="block text-sm mb-1">CVC</label>
              <input
                id="cvc"
                type="text"
                name="fake-cvc"
                autoComplete="off"
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>

          {/* Senha */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm mb-1">Senha</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="fake-password"
              autoComplete="new-password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 pr-20"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[38px] right-3 text-sm text-gray-300 hover:text-white"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          {/* Botão de verificação */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition duration-300"
          >
            Verificar Cartão
          </button>

          {/* Resultado */}
          {result && (
            <div
              className={`mt-4 text-center text-lg font-semibold ${
                result === "Vazado" ? "text-red-500" : "text-green-400"
              }`}
            >
              {result === "Vazado"
                ? "⚠️ Cartão possivelmente vazado!"
                : "✅ Nenhum vazamento encontrado."}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}