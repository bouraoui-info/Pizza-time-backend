import { Injectable } from "@nestjs/common";
import { DeepPartial, DeleteResult, Repository, UpdateResult } from "typeorm";
import {Panier} from './panier.entity'
import { panier } from "./panier.interface";
import { User } from "src/users/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PanierService {

    constructor(
        @InjectRepository(Panier)
        private readonly panierRepository: Repository<Panier>
    ) { }

    async createPanier(panier: DeepPartial<Panier>): Promise<Panier> {
        const newPanier = this.panierRepository.create(panier);
        return this.panierRepository.save(newPanier);
    }

    findAllPanier(condition: any): Promise<Panier[]> {
        return this.panierRepository.find(condition);
    }

    deletePanier(panier: Panier): Promise<DeleteResult> {
        return this.panierRepository.delete(panier);
    }

    updatePanier(panier: Panier): Promise<UpdateResult> {
        return this.panierRepository.update(panier, { etat: 'payé' });
    }

}

