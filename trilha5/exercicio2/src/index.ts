abstract class Inventario {
  protected itens: Record<string, number>; 

  constructor() {
    this.itens = {};
  }

  abstract adicionarItem(item: string, quantidade: number): void;
  abstract removerItem(item: string): void;
  abstract obterInventario(): Record<string, number>;
}

class InventarioArmazem extends Inventario {

  adicionarItem(item: string, quantidade: number): void {
    if (quantidade <= 0) {
      console.log(`Quantidade inválida para o item "${item}".`);
      return;
    }

    if (this.itens[item]) {
      this.itens[item] += quantidade;
    } else {
      this.itens[item] = quantidade;
    }

    console.log(`Adicionado ${quantidade}x "${item}" ao inventário do armazém.`);
  }

  removerItem(item: string): void {
    if (!this.itens[item]) {
      console.log(`O item "${item}" não existe no armazém.`);
      return;
    }

    delete this.itens[item];
    console.log(`Item "${item}" removido do inventário do armazém.`);
  }

  obterInventario(): Record<string, number> {
    return this.itens;
  }
}

class InventarioLoja extends Inventario {
  private LIMITE_POR_ITEM = 10;

  adicionarItem(item: string, quantidade: number): void {
    if (quantidade <= 0) {
      console.log(`Quantidade inválida para o item "${item}".`);
      return;
    }

    const quantidadeAtual = this.itens[item] || 0;
    const novaQuantidade = quantidadeAtual + quantidade;

    if (novaQuantidade > this.LIMITE_POR_ITEM) {
      console.log(
        `Não é possível adicionar ${quantidade}x "${item}". Limite máximo por item é ${this.LIMITE_POR_ITEM}.`
      );
      this.itens[item] = this.LIMITE_POR_ITEM; 
    } else {
      this.itens[item] = novaQuantidade;
      console.log(`Adicionado ${quantidade}x "${item}" ao inventário da loja.`);
    }
  }

  removerItem(item: string): void {
    if (!this.itens[item]) {
      console.log(`O item "${item}" não existe na loja.`);
      return;
    }

    delete this.itens[item];
    console.log(`Item "${item}" removido do inventário da loja.`);
  }

  obterInventario(): Record<string, number> {
    return this.itens;
  }
}

const armazem = new InventarioArmazem();
armazem.adicionarItem("Parafuso", 500);
armazem.adicionarItem("Martelo", 20);
armazem.removerItem("Martelo");
console.log("\n📦 Inventário do Armazém:", armazem.obterInventario());

const loja = new InventarioLoja();
loja.adicionarItem("Parafuso", 5);
loja.adicionarItem("Parafuso", 8); 
loja.adicionarItem("Chave de Fenda", 3);
console.log("\n🏪 Inventário da Loja:", loja.obterInventario());
