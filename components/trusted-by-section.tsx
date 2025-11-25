export default function TrustedBySection() {
  const integrations = [
    { name: 'MK-Auth', icon: '🔐' },
    { name: 'SGP', icon: '📊' },
    { name: 'IXC', icon: '🌐' },
    { name: 'ISPFY', icon: '⚡' },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect rounded-2xl p-8 sm:p-12 border border-primary/10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Integração Direta com os Principais Sistemas</h2>
          <p className="text-muted-foreground text-center mb-10">Conecte-se aos sistemas que você já utiliza</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{integration.icon}</div>
                <p className="font-semibold text-center">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
